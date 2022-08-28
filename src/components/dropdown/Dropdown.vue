<template>
  <div class="dropdown">
    <div class="link" @click="toggleDropdown">
      <slot/>
    </div>

    <div class="dropdown-menu" v-if="toggled">
      <slot name="dropdown"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import {ref, provide} from 'vue'

 const toggled = ref(false)
 provide('ref-toggled', toggled)

 function toggleDropdown() {
   toggled.value = !toggled.value
 }
</script>

<style lang="scss" scoped>
 div.dropdown {
   position: relative;
   display: flex;
   div.dropdown-menu {
     z-index: 1000;
     max-width: 80px;
     position: absolute;
     top: 30px;

     box-shadow: 0 0 12px rgba(0, 0, 0, .12);
   }
 }
</style>