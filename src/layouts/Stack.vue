<template>
  <div class="stack" v-stack>
   <slot/> 
  </div>
</template>

<script lang="ts" setup>
 import {stack as vStack} from '@/directives'
</script>
<style lang="scss" scoped>
 div.stack {
   position: relative;
   width: 100%;
   height: 100%;
 }
</style>