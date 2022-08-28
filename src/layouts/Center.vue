<template>
  <div class="center" v-single>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
 import Row from './Row.vue'
 import {single as vSingle} from '@/directives'
</script>

<style lang="scss" scoped>
div.center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>