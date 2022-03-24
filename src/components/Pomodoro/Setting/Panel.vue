<template>
  <div class="setting-panel">
    <div class="settings">
      <row class="header" main-axis="space-between" cross-axis="center">
	<span class="title">TIMER SETTING</span>
	<span class="close" @click="cancel">
	  <img src="@/assets/remove-black-sm.png"/>
	</span>
      </row>

      <column class="settings time" main-axis="center" cross-axis="space-between">
	<row class="text">Time(minutes)</row>
	<row class="time" main-axis="space-between">
	  <column class="input">
	    <span>Pomodoro</span>
	    <input type="number" v-model="minutesPomodoro" />
	  </column>

	  <column class="input">
	    <span>Short Break</span>
	    <input type="number" v-model="minutesShortbreak" />
	  </column>

	  <column class="input">
	    <span>Long Break</span>
	    <input type="number" v-model="minutesLongbreak" />
	  </column>
	</row>
      </column>
    </div>

    <row class="submit" main-axis="end">
      <button @click="submit">OK</button>
    </row>
  </div>
</template>

<script lang="ts" setup>
 import {Row, Column} from '@/components/Layout'
 import { inject, ref, Ref } from '@vue/runtime-core'
 import { Time } from '../types'

 const timePomodoro = inject('time:pomodoro') as Ref<Time>
 const timeShortbreak = inject('time:shortbreak') as Ref<Time>
 const timeLongbreak = inject('time:longbreak') as Ref<Time>

 const minutesPomodoro = ref(timePomodoro.value.minutes)
 const minutesShortbreak = ref(timeShortbreak.value.minutes)
 const minutesLongbreak = ref(timeLongbreak.value.minutes)

 const toggled = inject('toggled') as Ref<boolean>
 function submit() {
   // set time
   timePomodoro.value.minutes = minutesPomodoro.value
   timeShortbreak.value.minutes = minutesShortbreak.value
   timeLongbreak.value.minutes = minutesLongbreak.value
   // TODO set toggled
   // console.log('todo feature, set the toggled value')
   toggled.value = false
 }

 function cancel() {
   // TODO set toggled
   toggled.value = false
 }
</script>

<style lang="scss" scoped>
 div.setting-panel {
   background: white;
   border-radius: 8px;
   width: 400px;
   margin: auto;

   div.settings {
     padding: 20px 20px 0 20px;
     
     .header {
       margin-bottom: 16px;

       span.title {
	 font-size: 16px;
	 color: rgb(187, 187, 187);
	 text-transform: uppercase;
	 font-weight: bold;
       }

       span img {
	 width: 17px;
	 opacity: 0.3;
	 cursor: pointer;

	 &:hover {
	   opacity: 1;
	 }
       }
     }

     .settings {
       border-top: 1px solid rgba(182, 165, 166, 0.2);
       padding: 20px 0;
       min-height: 30px;

       .text {
	 color: rgb(85, 85, 85);
	 font-weight: bold;
       }

       .time {
	 margin-top: 10px;
	 .input {
	   width: 98px;

	   span {
	     display: block;
	     font-size: 14px;
	     color: rgb(187, 187, 187);
	     font-weight: bold;
	     margin-bottom: 4px;
	   }

	   input {
	     border-radius: 4px;
	     background: rgb(239, 239, 239);
	     font-size: 16px;
	     padding: 10px;
	     box-shadow: none;
	     border: medium none;
	     color: rgb(85, 85, 85);
	     width: 100%;
	     box-sizing: border-box;
	   }
	 }
       }
       
     }
   }

   .submit {
     padding: 14px 20px;
     border-bottom-left-radius: 8px;
     border-bottom-right-radius: 8px;
     background: rgb(239, 239, 239);
     
     button {
       border-radius: 4px;
       cursor: pointer;
       box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px;
       color: white;
       opacity: 0.9;
       font-size: 14px;
       padding: 8px 12px;
       min-width: 70px;
       background: rgb(34, 34, 34);
       border: 2px solid rgb(34, 34, 34);

       &:hover {
	 opacity: 1;
       }
     }
   }
 }
</style>