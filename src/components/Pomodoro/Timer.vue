<template>
  <div class="pomodoro-timer">
    <Row class="tags" main-axis="center" cross-axis="center">
      <template v-for="(_tag, index) in tags" :key="index">
	<Center class="tag" :class="{'selected': _tag == tag}" @click="switchTag(_tag)">
	  {{_tag}}
	</Center>
      </template>
    </Row>

    <div class="time">
      {{zeroPadding(lefttime.minutes)}}:{{zeroPadding(lefttime.seconds)}}
    </div>

    <button @click="toggleCountDown">
      {{option}}
    </button>
    
  </div>
</template>

<script lang="ts" setup>
 import { computed, ref, Ref } from "@vue/reactivity"
 import { inject, PropType, watch } from "@vue/runtime-core"
 import {Task, Time} from './types'
 import music from '@/assets/notifaction.mp3'
 import {Row, Center} from '@/components/Layout'
 type Tag = 'Pomodoro' | 'Short Break' | 'Long Break'
 type Option = 'START' | 'STOP'

 const {maxCount, timePomodoro, timeShortbreak, timeLongbreak} = defineProps({
   maxCount: Number,
   timePomodoro: Object as PropType<Time>,
   timeShortbreak: Object as PropType<Time>,
   timeLongbreak: Object as PropType<Time>
 })

 let finishCount = 0
 let intervalID = -1

 const tags = ['Pomodoro', 'Short Break', 'Long Break']
 // const tag = ref<Tag>('Pomodoro')
 const tag = inject('tag') as Ref<String>
 const lefttime = ref<Time>(timePomodoro)
 const option = ref<Option>('START')
 const currentTask = inject('current:task') as Ref<Task>

 watch(lefttime, ({minutes, seconds}, oldvalue) => {
   let isempty = minutes == 0 && seconds == 0

   // when count down is finished, the lefttime should change into match status
   if(isempty) {
     // TODO play music
     playMusic();

     stopCountDown()
     option.value = 'START'
     
     if(tag.value == 'Pomodoro') {
       finishCount += 1
       if(currentTask.value != null) {
	 currentTask.value.finished += 1
       }

       if(finishCount % Number(maxCount) == 0) {
	 finishCount = 0
	 switchTag('Long Break')
       } else {
	 switchTag('Short Break')
       }
     } else {
       switchTag('Pomodoro')
     }
   }

 })

 function switchTag(_tag: Tag) {
   tag.value = _tag
   if(_tag == 'Pomodoro') {
     lefttime.value = timePomodoro as Time
   } else if(_tag == 'Short Break') {
     lefttime.value = timeShortbreak as Time
   } else if(_tag == 'Long Break') {
     lefttime.value = timeLongbreak as Time
   }
 }

 function toggleCountDown() {
   if(option.value == 'START') {
     startCountDown()
   } else {
     stopCountDown()
   }
 }

 function startCountDown() {
   option.value = 'STOP'
   intervalID = setInterval(() => {
     let {minutes, seconds} = lefttime.value
     if(seconds == 0) {
       minutes -= 1
       seconds = 59
     } else {
       seconds -= 1
     }
     
     lefttime.value = {minutes, seconds}
   }, 10)

 }

 function stopCountDown() {
   option.value = 'START'
   clearInterval(intervalID)
 }

 function zeroPadding(x: number): string {
   return x < 10 ? `0${x}` : `${x}`
 }

 async function playMusic(timeout=10000) {
   let audio = new Audio(music)
   await audio.play()

   setTimeout(() => {
     audio.pause()
   }, timeout)
 }
</script>

<style lang="scss" scoped>
 div.pomodoro-timer {
   width: 480px;
   margin: auto;
   background: rgba(255, 255, 255, 0.1);
   padding: 20px 0 30px;
   border-radius: 6px;
   margin-bottom: 20px;
   color: white;

   .tags {
     .tag {
       border: medium none;
       margin: 0px;
       border-radius: 4px;
       font-size: 16px;
       padding: 2px 12px;
       height: 28px;
       cursor: pointer;
       background: rgba(0,0,0,0) none repeat scroll 0% 0%;
       box-shadow: none;
       font-weight: 300;
     }

     .tag.selected {
       background: rgba(0, 0, 0, 0.15) none repeat scroll 0% 0%;
       opacity: 1;
     }
   }

   div.time {
     font-size: 120px;
     font-weight: bold;
     margin-top: 20px;
   }

   button {
     cursor: pointer;
     border: medium none;
     margin: 20px 0 0;
     padding: 0 12px;
     border-radius: 4px;
     box-shadow: rgb(235, 235, 235) 0 6px 0;
     font-family: ArialRounded;
     font-size: 22px;
     height: 55px;
     color: rgb(217, 85, 80);
     font-weight: bold;
     width: 200px;
     background: white;
     transition: color 0.5s;
   }
 }
</style>