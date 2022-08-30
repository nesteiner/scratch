<template>
  <div class="testview">
    <Row>
      <Column class="column">
        <h3>Hello World</h3>
      </Column>
      <h3> Fuck You</h3>
    </Row>
    <div class="column2">
      <div class="box"/>
      <div class="box"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Row, Column} from "@/layouts";

</script>

<style lang="scss" scoped>
div.testview {
  .column {
    border: 1px solid black;
  }

  .column2 {
    height: 500px;
    border: 3px solid black;

    .box {
      height: 100%;
      width: 100%;
      border: 1px solid red;
    }
  }
}
</style>