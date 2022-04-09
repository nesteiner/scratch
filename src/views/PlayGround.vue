<template>
  <div class="playground">
    <!-- <div class="target">
	 <span ref="span"> Hello World </span>
	 </div> -->

    <button @click="show = true"> Click me </button>

    <Dialog v-model="show" title="Tips">
      <span> This is a message </span>
      <template #footer>
	<span class="footer">
	  <button @click="show = false">Cancel</button>
	  <button @click="show = false">Confirm</button>
	</span>
      </template>
    </Dialog>


    <button @click="dialogTableVisible = true"> open a table nested Dialog </button>
    <Dialog v-model="dialogTableVisible" title="Shipping address">
      <table>
	<tr>
	  <td>1</td>
	  <td>2</td>
	  <td>3</td>
	</tr>

	<tr>
	  <td>1</td>
	  <td>2</td>
	  <td>3</td>
	</tr>

	<tr>
	  <td>1</td>
	  <td>2</td>
	  <td>3</td>
	</tr>

	<tr>
	  <td>1</td>
	  <td>2</td>
	  <td>3</td>
	</tr>

	<tr>
	  <td>1</td>
	  <td>2</td>
	  <td>3</td>
	</tr>

      </table>
    </Dialog>


    <button @click="drawerFooterVisible = true">with Footer</button>

    <Drawer v-model="drawerFooterVisible" direction="left-right" title="This is Title">
      <template #default>
	<table>
	  <template v-for="i in [1, 2, 3, 4]" :key="i">
	    <tr>
	      <td>1</td>
	      <td>2</td>
	      <td>3</td>
	    </tr>
	  </template>
	</table>
      </template>

      <template #footer>
	<div style="flex: auto">
          <button @click="drawerFooterVisible = false">cancel</button>
          <button @click="drawerFooterVisible = false">confirm</button>
	</div>
      </template>
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
 import { ref } from '@vue/reactivity'
 import Dialog from '@/components/Component/Dialog.vue';
 import Drawer from '@/components/Component/Drawer.vue';
 // const span = ref<HTMLElement>()
 const show = ref(false)
 const dialogTableVisible = ref(false)
 const drawerFooterVisible = ref(false)
 
</script>

<style lang="scss" scoped>
 div.target {
   height: 250px;
   width: 250px;
   background: red;
 }
</style>
