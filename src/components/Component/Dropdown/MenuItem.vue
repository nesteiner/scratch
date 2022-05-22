<template>
  <li @click="onClick">
    <slot/>
  </li>
</template>

<script lang="ts" setup>
 import {inject, Ref} from 'vue'

 const toggled = inject('ref-toggled') as Ref<boolean>
 const emit = defineEmits(['click'])
 function onClick() {
   toggled.value = false
   emit('click')
 }
</script>
<style lang="scss" scoped>
 li {
   width: 72px;
   cursor: pointer;
   line-height: 24px;

   &:hover {
     background: rgba(0, 0, 0, .12);
   }
 }
</style>