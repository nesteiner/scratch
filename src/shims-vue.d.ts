/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Event {
  dataTransfer: {
    setData(...args): void
    getData(...args)
  }
}