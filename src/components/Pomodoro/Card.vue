<template>
  <div class="card">
    <component
      :is="current"
      :text="data.text"
      :isdone="data.isdone"
      :expect="data.expect"
      v-model:finished="data.finished"
      @onclick="handler"/>

  </div>
</template>

<script lang="ts" setup>
 import CardBase from './CardBase.vue'
 import CardExpand from './CardExpand.vue'
 import {computed, reactive, ref} from 'vue'
 let toggled = ref(false)
 
 let data = reactive({
   text: "Hello",
   isdone: false,
   expect: 1,
   finished: 0
 })

 let current = computed(() => toggled.value ? CardExpand : CardBase)

 let handler = (emitdata: {event: string, text?: string, expect?: number}) => {
   let event = emitdata.event
   if (event == 'popup') {
     onpopup()
   } else if(event == 'cancel') {
     oncancel()
   } else if(event == 'delete') {
     ondelete()
   } else if(event == 'save') {
     // FIXME data should update here
     onsave(emitdata.text!, emitdata.expect!)
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

 let onsave = (text: string, expect: number) => {
   data.text = text
   data.expect = expect
   onpopup()
 }

</script>