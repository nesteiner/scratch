<template>
  <Row main-axis="space-between"
       cross-axis="center"
       class="taskcard-base"
       :class="{'selected': task == currentTask, 'done': task.isdone}"
       @click="selectCard">
    
    <Row class="property">
      <div class="button done" @click="toggleDone"/>
      <div class="name">{{task.name}}</div>
    </Row>

    <Row class="options" main-axis="center" cross-axis="center">
      <div class="status">{{task.finished}}/{{task.expect}}</div>
      <Center class="more-option" @click="toggleSwitch">
	<img :src="imageurl"/>
      </Center>
    </Row>
  </Row>
</template>

<script lang="ts" setup>
 import { inject, Ref } from "@vue/runtime-core";
 import { Task } from "../types";
 import {Row, Center} from '@/components/Layout'
 import imageurl from '@/assets/options.png'
 const task = inject('task') as Ref<Task>
 const expanded = inject('expanded') as Ref<boolean>
 const currentTask = inject('current:task') as Ref<Task>

 function selectCard() {
   currentTask.value = task.value
 }

 function toggleDone() {
   task.value.isdone = !task.value.isdone
 }

 function toggleSwitch() {
   expanded.value = true
 }
</script>

<style lang="scss" scoped>
 .taskcard-base {
   cursor: pointer;
   background: white;
   text-align: left;
   font-size: 16px;
   box-sizing: border-box;
   transition: unset;
   box-shadow: none;
   transform: translateY(2px);
   border-left: 6px solid white;
   margin-top: 8px;

   &:hover {
     border-left: 6px solid rgb(204, 204, 204);
   }

   &.selected {
     border-left: 6px solid rgb(34, 34, 34);
   }

   .property {
     padding: 18px 0 18px 14px;
     width: 75%;

     div.button.done {
       cursor: pointer;
       display: inline-block;
       width: 22px;
       height: 22px;
       border: 2px solid rgb(223, 223, 223);
       background: rgb(223, 223, 223);
       margin-right: 10px;
       border-radius: 50%;

       &:hover {
	 opacity: 0.6;
       }

       &::after {
	 content: "";
	 display: block;
	 margin-left: 7px;
	 margin-top: 3px;
	 width: 5px;
	 height: 11px;
	 border-color: white;
	 border-style: solid;
	 border-image: none 100% / 1 / 0 stretch;
	 border-width: 0 3px 3px 0;
	 transform: rotate(45deg);
       }
     }

     div.name {
       color: rgb(85, 85, 85);
       line-height: 1.5em;
       width: 85%;
       font-weight: bold;
     }
     
   }

   .options {
     width: 25%;

     div.status {
       margin-right: 18px;
       font-weight: bold;
       color: rgb(187, 187, 187);
     }

     .more-option {
       cursor: pointer;
       border: 1px solid rgb(223, 223, 223);
       border-radius: 4px;
       padding: 2px 4px;
       width: 20px;

       &:hover {
	 background: rgb(223, 223, 223);
       }

       img {
	 width: 18px;
	 opacity: 0.4;
	 margin-top: 3px;
       }
     }

   }

 }
</style>

<style lang="scss" scoped>
 .taskcard-base.done {
   .property {
     div.button.done {
       border: 2px solid rgb(217, 85, 80);
       background: rgb(217, 85, 80);
     }
     
     div.name {
       text-decoration: line-through;
       color: rgb(187, 187, 187);
     }
   }
 }
</style>