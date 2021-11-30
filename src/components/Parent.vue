<template>
  <div class="parent">
    <Child
      v-model:count1="count1"
      v-model:count2="count2"
    />
  </div>
</template>

<script lang="ts" setup>
 import {provide, ref} from 'vue'
 import Child from './Child.vue'

 let count1 = ref<number>(0);
 let count2 = ref<number>(10);

 provide('value', 10)
 provide('ref', ref(10))
</script>