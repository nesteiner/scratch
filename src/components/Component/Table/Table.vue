<template>
  <table>
    <tr>
      <template v-for="(label, index) in labelList" :key="index">
	<th>{{label}}</th>
      </template>
    </tr>

    <template v-for="(item, index1) in data" :key="index1">
      <tr>
	<template v-for="(prop, index2) in propList" :key="index2">
	  <td> {{item[prop]}} </td>
	</template>
      </tr>
    </template>
  </table>
</template>

<script lang="ts" setup>
 import {onMounted, useSlots, ref} from 'vue'

 const props = defineProps({
   data: {type: Array, required: true}
 })

 const slots = useSlots()
 const propList = ref([])
 const labelList = ref([])

 onMounted(() => {

   let slot = slots.default()
   for(let _default of slot) {
     let prop = _default.props["prop"]
     let label = _default.props["label"]
     propList.value.push(prop)
     labelList.value.push(label)
   }

 })
</script>

<style lang="scss" scoped>
 tr {
   border-bottom: 1px solid black;

   th {
     color: rgb(144, 147, 153);
     font-size: 27px;
     font-weight: 700;
     line-height: 23px;
     padding: 12px;
   }

   td {
     font-size: 20px;
     font-weight: 400;
     padding: 8px 0;
   }
 }
</style>