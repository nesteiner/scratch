<template>
  <div class="table-view">
    <Table :data="tableData">
      <TableColumn prop="id" label="id"/>
      <TableColumn prop="name" label="name"/>
      <TableColumn prop="age" label="age"/>
    </Table>
  </div>
</template>

<script lang="ts" setup>
 import {Table, TableColumn} from '@/components/Component/Table'
 const tableData = [
   {
     id: 1,
     name: 'hello',
     age: 1
   },

   {
     id: 2,
     name: 'world',
     age: 2,
   },

   {
     id: 3,
     name: 'fuck',
     age: 3
   }
 ]
</script>