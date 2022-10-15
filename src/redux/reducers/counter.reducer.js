import{FETCH_BLOG} from './actionType'

const initialState ={
  post:{}
}

export const fetchPost = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_BLOG:
      return{
        ...state,
        post:action.payload
      }

      default:
        return state
  }
}