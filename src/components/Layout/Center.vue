<template>
  <Row main-axis="center" cross-axis="center" v-single>
    <slot/>
  </Row>
</template>

<script lang="ts" setup>
 import Row from './Row.vue'
 import {single as vSingle} from '@/directives'
</script>