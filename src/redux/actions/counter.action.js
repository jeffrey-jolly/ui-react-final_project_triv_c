import {FETCH_BLOG} from '../reducers/actionType'


export const fetchThunkBlog = (response)=> async (dispatch)=>{
  console.log("Posts")
  let data = await response.json()
  console.log(data)
  dispatch({
    type: FETCH_BLOG,
    payload:data,
  })

  console.log("Hello")
}