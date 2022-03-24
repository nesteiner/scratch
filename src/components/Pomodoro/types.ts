interface Task {
  id: number,
  name: string,
  isdone: boolean,
  finished: number,
  expect: number,
}

 interface Time {
   minutes: number,
   seconds: number
 }

export {Task, Time}