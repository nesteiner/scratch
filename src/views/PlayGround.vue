<template>
  <div class="playground">
    <div class="target">
      <span ref="span"> Hello World </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { ref } from '@vue/reactivity'
 import outsideClick from '@varld/outside-click'
 const span = ref<HTMLElement>()

 outsideClick(span, onClickOutside)

 function onClickOutside(event: Event) {
   console.log(`Clickd outside. Event: ${event}`)
 }
 
</script>

<style lang="scss" scoped>
 div.target {
   height: 250px;
   width: 250px;
   background: red;
 }
</style>
