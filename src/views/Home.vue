<template>
  <div class="home">
    <!-- <card v-model:text="text"
	 v-model:isdone="isdone"
	 v-model:expect="expect"
	 v-model:finished="finished"/>

	 <div style="height: 100px"/>

	 <ForkCard/> -->
        <!-- <hover-div/> -->

    <test text="Fuck You"/>
  </div>
</template>

<script lang="ts">
 import { defineComponent, ref } from 'vue';
 import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
 import {Card} from '@/components/Pomodoro'
 import {ForkCard} from '@/components/ForkPomodoro'
 import HoverDiv from '@/components/hover.vue'
import Test from '@/components/test.vue'
 export default defineComponent({
   name: 'Home',
   components: {
     HelloWorld,
     Card,
     ForkCard,
     HoverDiv,
      Test
   },

   setup() {
     let text = ref('Hello World')
     let isdone = ref(false)
     let expect = ref(1)
     let finished = ref(0)

     return {
       text,
       isdone,
       expect,
       finished
     }
   }
});
</script>

<style scoped>
 div.home {
   /* background: rgb(217, 85, 80); */
   padding: 10px;
 }
</style>