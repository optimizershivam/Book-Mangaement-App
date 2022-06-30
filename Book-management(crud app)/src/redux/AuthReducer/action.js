import axios from "axios"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionTypes"

export const login =(payload)=> (dispatch)=> {
    dispatch({type:USER_LOGIN_REQUEST})

   return axios({
    method:"post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data:payload
   })
    .then((r)=> dispatch({type:USER_LOGIN_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:USER_LOGIN_FAILURE}))
}
export const logout=()=>(dispatch)=>{
    dispatch({type:USER_LOGOUT_SUCCESS})
}