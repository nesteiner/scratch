<template>
  <div class="checkbox">
    <input ref="checkbox" type="checkbox" :value="value" @change="onChange"/>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
 import {ref} from 'vue'
 const props = defineProps({
   value: {required: true},
   modelValue: {type: Array, required: true}
 })

 const checkbox = ref<HTMLInputElement>()
 const emit = defineEmits('update:modelValue')
 function onChange() {
   let array = props.modelValue
   if(checkbox.value.checked) {
     array.push(props.value)
   } else {
     let index = array.indexOf(props.value)
     if(index != -1) {
       array.splice(index, 1)
     }
   }

   emits('update:modelValue', array)
 }
</script>

<style lang="scss" scoped>
 div.checkbox {
   display: flex;
   align-items: center;
 }
</style>