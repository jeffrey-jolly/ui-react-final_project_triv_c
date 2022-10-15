import {FETCH_BLOG} from '../reducers/actionType'


export const fetchThunkBlog = (id)=> async (dispatch)=>{
  console.log("Posts")
  const apiURL = "http://localhost:3000/posts/"
  let response = await fetch(`${apiURL}` + id)
  let data = await response.json()
  console.log(data)
  dispatch({
    type: FETCH_BLOG,
    payload:data,
  })
console.log("data:",data)
}