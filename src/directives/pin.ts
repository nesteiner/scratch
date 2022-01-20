import { DirectiveBinding, ObjectDirective } from "@vue/runtime-core";

const pin: ObjectDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.style.position = 'fixed'
    const s = binding.arg || 'top'
    el.style[s] = binding.value + 'px'
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    const s = binding.arg || 'top'
    el.style[s] = binding.value + 'px'
  }
}

export default pin