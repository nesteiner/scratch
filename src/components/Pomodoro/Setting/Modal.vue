<template>
  <center class="setting-modal">
    <slot/>
  </center>
</template>

<script lang="ts" setup>
 import {Center} from '@/components/Layout'
</script>

<style lang="scss" scoped>
 div.setting-modal {
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;

   background: rgba(0, 0, 0, 0.3);
   z-index: 100;
 }
</style>