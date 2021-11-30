<template>
  <div class="pomodoro-card expanded">
    <div class="form">
      <div class="input">
	<!-- <input type="text" placeholder="What are you working on?" :value="text" @input="inputText = $event.target.value"> -->
	<input type="text" placeholder="What are you working on?" v-model.trim="inputText"/>
      </div>

      <div class="edit">
	<div class="placeholder">
	  <span>Est Pomodoros</span>
	</div>

	<!-- <input type="number" min="0" step="1" :value="inputNumber" @input="inputNumber = parseInt($event.target.value)"> -->
	<input type="number" min="0" step="1" v-model.number="inputNumber"/>
	<button @click="increase">
	  <svg t="1637937618255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1846">
	    <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" p-id="1847"></path>
		  </svg>
	</button>
	<button @click="decrease">
	  <svg t="1637937660373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1978">
	    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" p-id="1979"></path>
	  </svg>
	</button>
      </div>

      <div class="add">
	<button>+ Add Note</button>
      </div>
    </div>

    <div class="options">
      <button class="delete" @click="ondelete">Delete</button>

      <div class="other">
	<button class="cancel" @click="oncancel">Cancel</button>
	<button class="save" @click="onsave">Save</button>
      </div>
                        </div>
  </div>
</template>

<script lang="ts" setup>
 import {defineProps, ref} from 'vue'
 
 const props = defineProps({
   text: {type: String, default: 'Unknown' },
   isdone: {type: Boolean, default: false  },
   expect: {type: Number,  default: 1 },
   finished: {type: Number, default: 0 }
 })

 let inputText = ref<string>(props.text)
 let inputNumber = ref<number>(props.expect)
 
 let emit = defineEmits(['onclick'])
 
 function ondelete() {
   emit('onclick', {
     'event': 'delete'
   })
 }

 
 function oncancel() {
   emit('onclick', {
     'event': 'cancel'
   })
 }

 function onsave() {
   emit('onclick', {
     'event': 'save',
     'text': inputText.value,
     'expect': inputNumber.value
   })
 }

 function increase() {
   inputNumber.value += 1
 }

 let decrease = () => {
   if(inputNumber.value > 1) {
     inputNumber.value -= 1
   }
 }

</script>

<style lang="scss" scoped>
 div.expanded {
   background: white;
   border-radius: 8px;
   text-align: left;
   box-shadow: rgba(0, 0, 0, 0.15) 0 10px 20px, rgba(0, 0, 0, 0.1) 0 3px 6px;

   input:focus, button:focus, textarea:focus {
     outline: none;
   }


   div.form {
     padding: 10px 20px 0px 20px;

     div {
       padding: 8px 0;
     }
     
     input {
       border-radius: 4px;
       font-size: 22px;
       padding: 10px 0;
       box-shadow: none;
       border: medium none;
       color: rgb(85, 85, 85);
       font-weight: bold;
     }

   }

   div.edit {
     div.placeholder {
       color: rgb(85, 85, 85);
       font-weight: bold;
     }

     input {
       border-radius: 4px;
       background: rgb(239, 239, 239);
       font-size: 16px;
       padding: 10px;
       box-shadow: none;
       border: medium none;
       color: rgb(85, 85, 85);
       width: 75px;
       margin-right: 10px;
       font-weight: bold;
     }

     button {
       border-radius: 4px;
       cursor: pointer;
       opacity: 0.9;
       font-size: 14px;
       padding: 8px 12px;
       width: 40px;
       background: white;
       color: rgb(85, 85, 85);
       border: 1px solid rgb(223, 223, 223);
       box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px;
       margin: 0 2px;

       svg {
	 width: 10px;
	 height: 10px;
	 opacity: 0.6;
	 scale: 1.5;
       }
     }
   }

   div.add {
     button {
       border-radius: 4px;
       cursor: pointer;
       opacity: 0.9;
       font-size: 14px;
       background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
       border: medium none;
       box-shadow: none;
       color: rgba(0, 0, 0, 0.4);
       font-weight: bold;
       text-decoration: underline;
     }
   }

   div.options {
     padding: 14px 20px;
     border-bottom-left-radius: 8px;
     border-bottom-right-radius: 8px;
     background: rgb(239, 239, 239);
     display: flex;
     justify-content: space-between;
     align-items: center;

     button {
       text-align: center;
       border-radius: 4px;
       cursor: pointer;
       opacity: 0.9;
       padding: 8px 12px;
       font-size: 14px;
       border: medium none;
       font-weight: bold;
       box-shadow: none;
       width: 70px;

       &.cancel, &.delete {
	 background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
	 color: rgb(136, 136, 136);
	 
       }

       &.save {
	 box-shadow: rgba(0, 0, 0, 0.2) 0 2px 2px;
	 color: white;
	 background: rgb(34, 34, 34,);
	 border: 2px solid rgb(34, 34, 34);
       }
     }

   }
 }

</style>