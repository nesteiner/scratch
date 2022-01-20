<template>
  <div class="sizedbox" :style="styleMap">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity"

 const props = defineProps({
   width: {
     type: Number,
     default: -1
   },
   
   height: {
     type: Number,
     default: -1
   }
 })

 const width = computed(() => props.width >= 0 ? props.width.toString() + 'px' : '100%')
 const height = computed(() => props.height >= 0 ? props.height.toString() + 'px' : '100%')

 const styleMap = ref({
   width: width,
   height: height
 })
</script>