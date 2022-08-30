<template>
  <div class="testview">
    <Column class="column">
      <h3>Hello World</h3>
    </Column>
  </div>
</template>

<script lang="ts" setup>
import Column from "@/layouts/Column.vue";

</script>

<style lang="scss" scoped>
div.testview {
  .column {
    border: 1px solid black;
  }
}
</style>