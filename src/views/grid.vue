<template>
  <div class="grid-view">
    <div class="wrapper">
      <div class="item1"> Item 1 </div>
      <div class="item2"> Item 2 </div>
      <div class="item3"> Item 3 </div>
      <div class="item4"> Item 4 </div>
    </div>

    <grid
      class="grid-wrapper"
      template-columns="repeat(3, 100px)"
      template-rows="repeat(3, 100px)"
      :template-areas="areas"
      align-content="space-around"
      gap="10px">
      <div class="item1" v-area:a> Item 1 </div>
      <div class="item2" v-area:b> Item 2 </div>
      <div class="item3" v-area:c> Item 3 </div>
      <div class="item4" v-area:d> Item 4 </div>
    </grid>

    <grid
      class="grid-wrapper"
      template-columns="repeat(3, 100px)"
      template-rows="repeat(3, 100px)"
      align-content="space-around"
      gap="10px">
      <div class="item1"> Item 1 </div>
      <div class="item2"> Item 2 </div>
      <div class="item3"> Item 3 </div>
      <div class="item4"> Item 4 </div>
    </grid>


    <div class="flex-wrapper">
      <div class="item1"> Item 1 </div>
      <div class="item2"> Item 2 </div>
      <div class="item3"> Item 3 </div>
      <div class="item4"> Item 4 </div>
    </div>

    <div class="container">
      <div class="child">
	Hello World
      </div>

      <!-- <div class="child">
	   Fuck You
	   </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
 import Grid from '@/components/Layout/Grid.vue'
 import {area as vArea} from '@/directives'
 // const areas = '"a a b" \
 // "a a b" \
 // "c d d" \
 // '

 const areas = ["'a a b'",
	       "'a a b'",
	       "'c d d'"].join('')
 
</script>

<style lang="scss" scoped>
 div.wrapper {
   margin-top: 100px;
   margin-bottom: 100px;
   border: 2px solid #f76707;
   border-radius: 5px;
   background: #fff4e6;

   display: grid;
   grid-template-columns: repeat(3, 100px);
   grid-template-rows: repeat(3, 100px);
   height: 500px;
   width: 500px;
   grid-gap: 10px;
   grid-template-areas:
     'a a b'
     'a a b'
     'c d d';

   /* align-content: space-between; */
   justify-content: space-around;
   div {
     border: 2px solid #ffa94d;
     border-radius: 5px;
     background: #ffd8a8;
     padding: 1em;
     color: #d9480f;
   }

   .item1 {
     grid-area: a;
   }

   .item2 {
     grid-area: b;
   }

   .item3 {
     grid-area: c;
   }

   .item4 {
     grid-area: d;
   }
 }

 .grid-wrapper {
   border: 2px solid #f76707;
   border-radius: 5px;
   background: #fff4e6;

   div {
     border: 2px solid #ffa94d;
     border-radius: 5px;
     background: #ffd8a8;
     padding: 1em;
     color: #d9480f;
   }

 }

 .flex-wrapper {
   margin-top: 100px;
   display: flex;
   /* height: 500px;
      flex-direction: column;
      justify-content: space-around; */
   width: 100px;
   flex-wrap: wrap;
   border: 2px solid #f76707;
   border-radius: 5px;
   background: #fff4e6;


   div {
     border: 2px solid #ffa94d;
     border-radius: 5px;
     background: #ffd8a8;
     padding: 1em;
     color: #d9480f;
   }

 }
</style>
<style lang="scss" scoped>
 div.container {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   /* height: 90px; */

   border: 1px solid black;
   padding: 10px;

   div.child {
     height: 30px;
     background: grey;
   }
 }
</style>
