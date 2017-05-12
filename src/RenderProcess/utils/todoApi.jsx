import axios from 'axios'

import {
  getLocal,
  setLocal,
} from './WebStorage'

/* API Function */
// @TODO API作成
/* URLs */
const TodoAPI = ''
/*
API系の処理まとめjsx
EditApi => CUD
ReadApi => R
*/
// parameter => object
export const EditApi = (parameter = null) => {
  let param = parameter
  if(!parameter){
    param = getLocal()
  }
  axios.post(
    TodoAPI,
    parameter,
  )
  .then((response) => {
    return response
  })
  .catch(() => {
    //@TODO throw new Error
  })
}
// All Read
export const ReadTodo = () => {
  axios.get(TodoAPI)
  .then((response) => {
    return response
  })
  .catch(() => {
    //@TODO throw new Error
  })
}
