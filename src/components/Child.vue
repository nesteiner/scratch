<template>
  <div class="child">
    <div>
      <p>{{count1}}</p>
      <button @click="handler1">Inc Count</button>
    </div>

    <div>
      <p>{{count2}}</p>
      <button @click="handler2">Dec Count</button>
    </div>

    <hr>
    <div>
      <p>inject value is {{value}}</p>
      <p>inject ref is {{refvalue}}</p>
      <button @click="handler3">Add the ref value</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import {defineProps, defineEmits, inject} from 'vue'
 const props = defineProps({
   count1: {type: Number, default: 0},
   count2: {type: Number, default: 10}
 })

 const emit = defineEmits(['update:count1', 'update:count2'])
 function handler1() {
   emit('update:count1', props.count1 + 1)
 }

 function handler2() {
   emit('update:count2', props.count2 - 1)
 }

 function handler3() {
   refvalue.value += 1
 }
 const value = inject('value')
 const refvalue = inject('ref')
</script>