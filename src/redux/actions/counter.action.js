import {FETCH_BLOG} from '../reducers/actionType'


export const fetchThunkBlog = (id)=> async (dispatch)=>{
  console.log("Posts")
  let response = await fetch(
    "http://localhost:3000/posts/" + id
  )
  let data = await response.json()
  console.log(data)
  dispatch({
    type: FETCH_BLOG,
    payload:data,
  })
}