<template>
  <div class="pomodoro" :class="{'short-break': tag == 'Short Break', 'long-break': tag == 'Long Break'}">
    <Timer
      :max-count="maxCount"
      :time-pomodoro="timePomodoro"
      :time-shortbreak="timeShortbreak"
      :time-longbreak="timeLongbreak"
    />

    <Setting/>

    <Column class="taskmenu" cross-axis="center">
      <template v-for="(task, index) in tasks" :key="index">
	<TaskCard
	  :id="task.id"
	  :name="task.name"
	  :isdone="task.isdone"
	  :finished="task.finished"
	  :expect="task.expect"/>
      </template>

      <TaskCreator @addtask="addtask" />
    </Column>
    
  </div>
</template>

<script lang="ts" setup>
 import { provide, ref, PropType } from 'vue'
 import {Task, Time} from './types'
 import {TaskCard, TaskCreator} from './TaskCard'
 import Setting from './Setting'
 import Timer from './Timer.vue'
 import {Column} from '@/components/Layout'
 // set global config
 const maxCount = 4;
 const timePomodoro: Time = ref({minutes: 25, seconds: 0})
 const timeShortbreak: Time = ref({minutes: 5, seconds: 0})
 const timeLongbreak: Time = ref({minutes: 15, seconds: 0})

 const currentTask = ref<Task | null>(null)
 const tasks = ref([])
 const tag = ref('Pomodoro')

 provide('current:task', currentTask)
 provide('all:tasks', tasks)
 provide('time:pomodoro', timePomodoro)
 provide('time:shortbreak', timeShortbreak)
 provide('time:longbreak', timeLongbreak)
 provide('tag', tag)

 function addtask(task: Task) {
   tasks.value.push(task)
 }

</script>

<style lang="scss" scoped>
 div.pomodoro {
   background: #d95550;
   max-width: 620px;
   padding: 0 12px;
   transition: background 0.5s ease-in-out 0s;

   .taskmenu {
     margin-top: 18px;
   }
 }

 div.pomodoro.short-break {
   background: #4c9195;
 }

 div.pomodoro.long-break {
   background: #457ca3;
 }
</style>