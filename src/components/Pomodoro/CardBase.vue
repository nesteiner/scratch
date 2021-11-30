<template>
  <div class="pomodoro-card">
    <div class="left">
      <div class="check"></div>

      <span class="text">
	{{text}}
      </span>
    </div>

    <div class="right">
      <span class="count">
	{{ finished }} / {{expect}}
      </span>

      <div class="popup" @click="onclick">
	<svg t="1637852449758" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3329">
	  <path d="M512 298.6496a85.3504 85.3504 0 1 0 0-170.6496 85.3504 85.3504 0 0 0 0 170.6496z" p-id="3330"></path>
	  <path d="M512 512m-85.3504 0a85.3504 85.3504 0 1 0 170.7008 0 85.3504 85.3504 0 1 0-170.7008 0Z" p-id="3331"></path>
	  <path d="M512 896a85.3504 85.3504 0 1 0 0-170.7008 85.3504 85.3504 0 0 0 0 170.7008z" p-id="3332"></path>
	</svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import {defineProps} from 'vue'
 
 const props = defineProps({
   text: {
     type: String,
     default: 'Unknown'
   },

   isdone: {
     type: Boolean,
     default: false
   },

   expect: {
     type: Number,
     default: 1
   },

   finished: {
     type: Number,
     default: 0
   }

 })

 const emit = defineEmits(['onclick'])
 let onclick = () => {
   emit('onclick', {
     'event': 'popup'
   })
 }

</script>
<style lang="scss" scoped>
 div.pomodoro-card {
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 4px;
   background: white;
   
   div.left {
     display: flex;
     justify-content: flex-start;
     align-items: center;
     position: relative;
     padding: 18px 0 18px 14px;
     overflow-wrap: break-word;
     width: 75%;

     div.check {
       display: inline-block;
       width: 22px;
       height: 22px;
       border: 2px solid rgb(223, 223, 223);
       background: rgb(223, 223, 223);
       margin-right: 10px;
       border-radius: 50%;

       &::after {
	 content: "";
	 display: block;
	 margin-left: 7px;
	 margin-top: 3px;
	 width: 4px;
	 height: 11px;
	 border-color: rgb(255, 255, 255);
	 border-style: solid;
	 border-image: none 100% / 1 / 0 stretch;
	 border-width: 0 3px 3px 0;
	 transform: rotate(45deg);
       }
     }

     span.text {
       text-align: left;
       color: rgb(85, 85, 85);
       font-weight: bold;
       width: 85%;
       overflow: hidden;
       line-height: 1.5em;
     }
   }

   div.right {
     display: flex;
     align-items: center;

     span.count {
       display: inline-block;
       color: rgb(187, 187, 187);
       font-weight: bold;
       margin-right: 40px;
       font-size: 14px;
       text-align: right;
     }

     div.popup {
       width: 30px;
       height: 30px;
       margin-right: 14px;
       
       cursor: pointer;
       border: 1px solid rgb(223, 223, 223);
       border-radius: 4px;
       background: white;

       display: flex;
       justify-content: center;
       align-items: center;

       svg {
	 width: 20px;
	 height: 20px;
	 fill: rgb(85, 85, 85);
       }
     }
   }
 }
</style>