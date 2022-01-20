import { ObjectDirective } from "@vue/runtime-core";

const single: ObjectDirective = {
  beforeMount: (el: HTMLElement) => {
    let count = el.childElementCount;
    if(count != 1) {
      throw "in center, there should be only one child"
    } 
  }
}

export default single