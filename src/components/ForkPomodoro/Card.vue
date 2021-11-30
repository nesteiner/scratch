<template>
  <div class="card">
    <component
      :is="current"
      @onclick="handler"
    />


  </div>
</template>

<script lang="ts" setup>
 import CardBase from './CardBase.vue'
 import CardExpand from './CardExpand.vue'
 import {computed, provide, ref} from 'vue'
 let toggled = ref(false)
 
 provide('text', ref("hello"))
 provide('isdone', ref(false))
 provide('expect', ref(1))
 provide('finished', ref(0))

 let current = computed(() => toggled.value ? CardExpand : CardBase)

 let handler = (emitdata: {event: string, text?: string, expect?: number}) => {
   let event = emitdata.event
   if (event == 'popup') {
     console.log('popup')
     onpopup()
   } else if(event == 'cancel') {
     oncancel()
   } else if(event == 'delete') {
     ondelete()
   } else if(event == 'save') {
     onpopup()
   } 
 }

 
 let onpopup = () => {
   toggled.value = !toggled.value
 }

 let oncancel = () => {
   onpopup()
 }

 let ondelete = () => {
   console.log('todo, emit delete')
 }

</script>