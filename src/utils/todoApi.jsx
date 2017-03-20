import axios from 'axios'

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
const EditApi = (parameter = null) => {
    if(!parameter){
      //@TODO throw new Error
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
const ReadTodo = () => {
  axios.get(TodoAPI)
  .then((response) => {
    return response
  })
  .catch(() => {
    //@TODO throw new Error
  })
}
