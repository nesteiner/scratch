<template>
  <div class="dialog">
    <button class="entry" @click="toggleDialog">{{text}}</button>
    <Center class="parent" v-show="show">
      <div class="container">
	<div class="content">
	  <slot name="content"/>
	</div>

	<div class="footer">
	  <button class="cancel" @click="onCancel">Cancel</button>
	  <button class="submit" @click="onSubmit">Submit</button>
	</div>
      </div>
    </Center>

  </div>
</template>

<script lang="ts" setup>
 import { ref } from "@vue/reactivity"
 import {Center} from '@/components/Layout'
 const props = defineProps({
   text: String,
   show: Boolean
 })
 
 const emit = defineEmits(['update:show', 'cancel', 'submit'])

 function toggleDialog() {
   emit('update:show', !props.show)
 }

 function onCancel() {
   emit('update:show', false)
   emit('cancel')
 }

 function onSubmit() {
   emit('update:show', false)
   emit('submit')
 }
</script>

<style lang="scss" scoped>

 button {
   border: 0;
   padding: 0 16px;
   height: 36px;
   margin: 3px;
   font-size: 15px;
   border-radius: 4px;
   cursor: pointer;
   color: white;
   transition: background 0.3s ease;
   outline: 0;
   font-weight: 500;
   box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);

   &.entry {
     background: #1867c0 !important;
     border-color: #1867c0 !important;

   }

   &.submit {
     background: rgba(231, 76, 60, 0.7);
     &:hover {
       background: rgba(231, 76, 60, 1);
     }
   }

   &.cancel {
     background: rgba(189, 195, 199, 0.7);
     &:hover {
       background: rgba(189, 195, 199, 1.0);
     }
   }
 }




 
 .parent {
   z-index: 100;
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   top: 0;
   background: rgba(0, 0, 0, 0.1);

   div.container {
     margin: auto;
     width: 70%;
     height: 60%;
     background: white;
     position: relative;

     div.content {
       height: 80%;
       overflow: scroll;
     }
     div.footer {
       position: absolute;
       /* bottom: 3%;
	  right: 5%; */
       bottom: 15px;
       right: 15px;

     }
   }
 } 
</style>
