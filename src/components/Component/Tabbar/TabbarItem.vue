<template>
  <div class="tabbar-item" v-show="name == activeName">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, Ref } from "@vue/runtime-core"

 const props = defineProps({
   name: String,
 })

 const activeName = inject('activeName') as Ref<string>
 const names = inject('names') as Ref<Array<string>>

 onMounted(() => {
   names.value!.push(props.name!)
 })
</script>