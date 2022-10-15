import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fetchPost } from "./counter.reducer";



const rootReducer = combineReducers({
  post: fetchPost
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)));

export default store