<template>
  <div class="padding" :style="styleMap">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"

 const padding = defineProps({
   left: {type: Number, default: 0},
   right: {type: Number, default: 0},
   top: {type: Number, default: 0},
   bottom: {type: Number, default: 0}
 })

 const styleMap = ref({
   left: `${padding.left}px`,
   right: `${padding.right}px`,
   top: `${padding.top}px`,
   bottom: `${padding.bottom}px`
 })
</script>
