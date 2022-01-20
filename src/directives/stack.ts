import { ObjectDirective } from "@vue/runtime-core";

const stack: ObjectDirective = {
  mounted: (el: HTMLElement) => {
    let maxheight = 0, maxwidth = 0;
    let children: HTMLCollection = el.children
    let startz: number = el.style.zIndex == '' ? 0 : parseInt(el.style.zIndex)

    for(let index = 0; index < children.length; index += 1) {
      let child = children.item(index)! as HTMLElement

      maxheight = Math.max(child.offsetHeight, maxheight)
      maxwidth = Math.max(child.offsetWidth, maxwidth)
      
      child.style.top = '0px'
      child.style.left = '0px'
      child.style.zIndex = startz.toString()
      child.style.position = 'absolute'
      startz += 1

    }

    el.style.width = maxwidth.toString() + 'px'
    el.style.height = maxheight.toString() + 'px'
  }
}

export default stack