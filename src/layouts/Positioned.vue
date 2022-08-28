<template>
  <div class="positioned" :style="styleMap" v-single>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
 import {single as vSingle} from '@/directives'
 import { computed, ref } from '@vue/reactivity'
 
 const props = defineProps({
   left: {type: Number, default: -1},
   right: {type: Number, default: -1},
   top: {type: Number, default: -1},
   bottom: {type: Number, default: -1},
   zIndex: {type: Number, default: 0}
 })

 interface Style {
   left?: string,
   right?: string,
   top?: string,
   bottom?: string
 }

 const styleMap = computed(() => {
   let style: Style = {}
   // for(let key in ['left', 'right', 'top', 'bottom']) {
   //   let value = props[key] as number
   //   if(value >= 0) {
   //     style[key] = value.toString() + 'px'
   //   }
   // }

   if(props.left >= 0) style["left"] = props.left.toString() + 'px'
   if(props.right >= 0) style["right"] = props.right.toString() + 'px'
   if(props.top >= 0) style["top"] = props.top.toString() + 'px'
   if(props.bottom >= 0) style["bottom"] = props.bottom.toString() + 'px'

   return style
 })
</script>
<style lang="scss" scoped>
 div.positioned {
   position: absolute;
   display: inline-block;
 }
</style>