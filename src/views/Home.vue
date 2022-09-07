<template>
  <div class="home">

  </div>
</template>

<script lang="ts">
 import { defineComponent, ref } from 'vue';
 import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
 import {Dialog} from '@/components'

 export default defineComponent({
   name: 'Home',
   components: {
     HelloWorld,
      Dialog
   },

   setup() {
     const text = ref('Hello World')
     const isdone = ref(false)
     const expect = ref(1)
     const finished = ref(0)
     const show = ref(false)

     function onCancel() {
       console.log('on cancel called')
     }

     function onSubmit() {
       console.log('on submit called')
     }

     return {
       text,
       isdone,
       expect,
       finished,
       show,

       onCancel,
       onSubmit,
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