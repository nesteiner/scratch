<template>
  <div class="taskcard-expand">
    <div class="input">
      <div class="name">
	<input v-model="task.name"/>
      </div>

      <div class="infomation">
	<span>Act / Est Pomodoros</span>
      </div>

      <div class="number">
	<input class="finished" type="number" v-model="task.finished">
	/
	<input class="expect" type="number" v-model="task.expect">

	<button @click="increase">
	  <img src="@/assets/caret-up.png">
	</button>

	<button @click="decrease">
	  <img src="@/assets/caret-down.png">
	</button>
      </div>

    </div>

    <Row main-axis="space-between" class="options">
      <button class="delete" @click.stop="Delete"> Delete </button>
      <Row>
	<button class="cancel" @click.stop="Cancel"> Cancel </button>
	<button class="save" @click="Save" :disabled="task.name.length == 0 || task.expect == 0"> Save </button>
      </Row>
    </Row>

  </div>
</template>

<script lang="ts" setup>
 import { inject, ref, Ref } from "@vue/runtime-core";
 import { Task } from "../types";
 import {Row} from '@/components/Layout'
 // ATTENTION 怕读脏了，用copy 的值来操作
 // const task = inject('task') as Ref<Task>
 const emit = defineEmits(['delete-task'])
 const reftask = inject('task') as Ref<Task>
 const task = ref<Task>(reftask.value)
 const expanded = inject('expanded') as Ref<boolean>
 const alltasks = inject('all:tasks') as Ref<Task[]>
 function increase() {
   task.value.expect += 1
 }

 function decrease() {
   if(task.value.expect != 0) {
     task.value.expect -= 1
   }
 }

 function Delete() {
   let id = task.value.id
   let matched = alltasks.value.findIndex(x => x.id == id)
   if(matched != -1) {
     alltasks.value.splice(matched, 1)
   }

   expanded.value = false
 }

 function Cancel() {
   task.value = reftask.value
   // then commit cancel
   expanded.value = false
 }

 function Save() {
   reftask.value = task.value
   expanded.value = false
 }
</script>

<style lang="scss" scoped>
 .taskcard-expand {
   background: white;
   border-radius: 8px;
   text-align: left;
   box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px, rgba(0, 0, 0, 0.1) 0 3px 6px;
   animation: 0.1s ease-in-out 0s 1 normal none running expand;
   margin-top: 8px;

   @keyframes expand {
     0% {
       transform: scale(1, 0.8);
       opacity: 0.1;
     }

     100% {
       transform: scale(1, 1);
       opacity: 1;
     }
   }

   div.input {
     padding: 18px 20px 0 18px ;
     
     div.name {
       padding: 4px 0px;
       
       input {
	 border-radius: 4px;
	 font-size: 22px;
	 padding: 10px 0px;
	 box-shadow: none;
	 border: medium none;
	 color: rgb(85, 85, 85);
	 width: 100%;
	 font-weight: bold;
	 outline-style: none;
       }
     }

     div.infomation {
       margin: 8px 0;
       color: rgb(85, 85, 85);
       font-weight: bold;
     }
     
     div.number {
       padding: 8px 0px;

       input[type=number] {
	 border-radius: 4px;
	 background: rgb(239, 239, 239);
	 font-size: 16px;
	 box-shadow: none;
	 border: medium none;
	 width: 75px;
	 font-weight: bold;
	 color: rgb(187, 187, 187);
	 padding: 10px;
	 outline-style: none;
	 box-sizing: border-box;

	 &:nth-child(2) {
	   margin-right: 10px;
	   color: rgb(85, 85, 85);
	 }
       }

       button {
	 text-align: center;
	 border-radius: 4px;
	 cursor: pointer;
	 opacity: 0.9;
	 font-size: 14px;
	 padding: 8px 12px;
	 display: inline-block;
	 min-width: 0px;
	 width: 40px;
	 background: white;
	 color: rgb(85, 85, 85);
	 border: 1px solid rgb(223, 223, 223);
	 box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px;
	 margin: 0 2px;

	 &:hover {
	   opacity: 1;
	 }

	 img {
	   width: 10px;
	   opacity: 0.6;
	 }
       }
     }
   }

   .options {
     padding: 14px 20px;
     text-align: right;
     border-bottom-left-radius: 8px;
     border-bottom-right-radius: 8px;
     background: rgb(239, 239, 239);
     /* width: 100%; */

     button.delete, button.cancel {
       text-align: center;
       border-radius: 4px;
       cursor: pointer;
       opacity: 0.9;
       font-size: 14px;
       padding: 8px 12px;
       min-width: 70px;
       background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
       border: medium none;
       color: rgb(136, 136, 136);
       font-weight: bold;
       box-shadow: none;

       &:hover {
	 opacity: 1;
       }
     }

     button.save {
       border-radius: 4px;
       cursor: pointer;
       box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
       color: white;
       opacity: 0.9;
       font-size: 14px;
       padding: 8px 12px;
       min-width: 70px;
       background: rgb(34, 34, 34);
       border: 2px solid rgb(34, 34, 34);
       display: inline-block;

       &:hover {
	 opacity: 1;
       }

       &[disabled] {
	 border: 2px solid rgb(171, 171, 171);
	 background: rgb(171, 171, 171);
	 cursor: not-allowed;
       }
     }

   }
 }
</style>