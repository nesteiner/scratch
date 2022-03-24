<template>
  <div class="taskcard">
    <component :is="expanded ? CardExpand : CardBase"/>
  </div>
</template>

<script lang="ts" setup>
 import { ref } from "@vue/reactivity"
 import { provide } from "@vue/runtime-core"
 import { Task } from "../types"
 import CardBase from './CardBase.vue'
 import CardExpand from './CardExpand.vue'
 const props = defineProps({
   id: Number,
   name: String,
   isdone: Boolean,
   finished: Number,
   expect: Number
 })

 const task = ref<Task>({...props})
 const expanded = ref(false)
 provide('task', task)
 provide('expanded', expanded)
</script>

<style lang="scss" scoped>
 div.taskcard {
   width: 480px;
 }
</style>