<template>
  <div class="home">
    <Card/>

    <div style="height: 100px"/>
    <ForkCard/>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';
 import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
 import {Card} from '@/components/Pomodoro'
 import {ForkCard} from '@/components/ForkPomodoro'

 export default defineComponent({
   name: 'Home',
   components: {
     HelloWorld,
     Card,
     ForkCard
   },
 });
</script>

<style scoped>
 div.home {
   background: rgb(217, 85, 80);
   padding: 10px;
 }
</style>