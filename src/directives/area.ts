import { DirectiveBinding, ObjectDirective } from "@vue/runtime-core";

const area: ObjectDirective = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    // ATTENTION binding like this v-area:areaname
    if(binding.arg == undefined) {
      throw "binding element this way: v-area:areaname"
    }

    el.style.gridArea = binding.arg
  }
}

export default area