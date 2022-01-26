<template>
  <div class="grid" :style="styleMap">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "@vue/runtime-core"

 type Content = 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly' | 'none'
 type Items = 'stretch' | 'start' | 'end' | 'center' | 'baseline' | 'none'
 interface Style {
   justifyContent?: Content
   alignContent?: Content

   justifyItems?: Items
   alignItems?: Items

   gridTemplateColumns?: string
   gridTemplateRows?: string
   gridTemplateAreas?: string
   gap?: string
 }

 const props = defineProps({
   justifyContent: {type: String as PropType<Content>, default: 'none'},
   alignContent: {type: String as PropType<Content>, default: 'none'},
   justifyItems: {type: String as PropType<Items>, default: 'none'},
   alignItems: {type: String as PropType<Items>, default: 'none'},
   templateColumns: {type: String, default: 'none'},
   templateRows: {type: String, default: 'none'},
   templateAreas: {type: String, default: 'none'},
   gap: {type: String, default: 'none'}
 })
 
// bind the style
 const styleMap = computed(() => {
   let style: Style = {}
   if(props.justifyContent != 'none') style.justifyContent = props.justifyContent
   if(props.alignContent != 'none') style.alignContent = props.alignContent
   if(props.justifyItems != 'none') style.justifyItems = props.justifyItems
   if(props.alignItems != 'none') style.alignItems = props.alignItems
   if(props.templateColumns != 'none') style.gridTemplateColumns = props.templateColumns
   if(props.templateRows != 'none') style.gridTemplateRows = props.templateRows
   if(props.templateAreas != 'none') style.gridTemplateAreas = props.templateAreas
   if(props.gap != 'none') style.gap = props.gap

   return style
 })
 
</script>
<style lang="scss" scoped>
 div.grid {
   display: grid;
 }
</style>