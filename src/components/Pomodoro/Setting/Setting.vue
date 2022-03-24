<template>
  <div class="setting">
    <setting-button @click="toggle" />
    <!-- v-show=toggled -->
    <setting-modal v-show="toggled">
      <setting-panel/>
    </setting-modal>
  </div>
</template>

<script lang="ts" setup>
 import { ref } from "@vue/reactivity";
 import {SettingButton, SettingPanel, SettingModal} from '@/components/Pomodoro/Setting'
import { provide } from "@vue/runtime-core";
 
 const toggled = ref(false)
 
 provide('toggled', toggled)

 function toggle() {
   toggled.value = true
 }
</script>
