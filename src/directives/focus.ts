// function focus(el: HTMLElement) {
//   el.focus()
// }

import { ObjectDirective } from "@vue/runtime-core";

const focus: ObjectDirective = {
  mounted: (el: HTMLElement) => {
    el.focus()
  }
}

export default focus