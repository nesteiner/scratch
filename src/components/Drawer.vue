<template>
  <div class="overlay" v-show="modelValue">
    <div class="drawer" ref="drawer">
      <header>
	<h4>{{title}}</h4>
	<button class="close" @click="close">
	  <i class="el-icon"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg></i>
	</button>
      </header>

      <section>
	<slot/>
      </section>

      <div class="footer" ref="footer">
	<slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { onMounted, PropType, ref, useSlots } from 'vue';
 type Direction = "top-bottom" | "bottom-top" | "left-right" | "right-left"
 const props = defineProps({
   modelValue: Boolean,
   direction: String as PropType<Direction>,
   title: String
 })

 const slots = useSlots()
 const emit = defineEmits(['update:modelValue'])
 const drawer = ref<HTMLDivElement>()
 const footer = ref<HTMLDivElement>()
 function close() {
   emit('update:modelValue', false)
 }

 onMounted(() => {
   let direction: Direction = props.direction!
   let style = drawer.value!.style

   style.flexDirection = "column"
   if(direction == "top-bottom" || direction == "bottom-top") {
     style.minHeight = "30%"
   } else {
     style.minWidth = "30%"
   }

   if(direction == "top-bottom") {
     style.left = style.top = style.right = "0"
   } else if (direction == "bottom-top") {
     style.left = style.bottom = style.right = "0"
   } else if (direction == "left-right") {
     style.left = style.top = style.bottom = "0"
   } else {
     style.right = style.top = style.bottom = "0"
   }

   // TODO judge the slots
   if(slots['footer']) {
     footer.value!.style.padding = "20px"
     footer.value!.style.paddingTop = "10px"
     footer.value!.style.textAlign = "right"
   }
 })
</script>

<style lang="scss" scoped>
 div.overlay {
   position: fixed;
   z-index: 100;
   background: rgba(0, 0, 0, 0.5);
   left: 0;
   right: 0;
   bottom: 0;
   top: 0;

   div.drawer {
     background: white;
     position: absolute;
     display: flex;

     header {
       display: flex;
       align-items: center;
       margin-bottom: 32px;
       padding: 20px;
       padding-bottom: 0;
       position: relative;

       h4 {
	 margin: 0;
       }

       button.close {
	 border: none;
	 cursor: pointer;
	 font-size: 20px;
	 color: inherit;
	 background: transparent;
	 outline: none;
	 position: absolute;
	 top: 6px;
	 right: 0px;

	 i.el-icon {
	   color: inherit;
	   height: 1em;
	   width: 1em;
	   line-height: 1em;
	   display: inline-flex;
	   justify-content: center;
	   align-items: center;
	   position: relative;
	   fill: currentColor;
	 }
       }
     }

     section {
       flex: 1;
       padding: 20px;
     }
   }
 }
</style>