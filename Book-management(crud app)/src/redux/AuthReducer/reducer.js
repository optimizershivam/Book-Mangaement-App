import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionTypes"
const token = localStorage.getItem("token");
const intialState= {
    
    token:token||"",
    isAuth:!!token,
    isLoading:false,
    isError:false
}

export const reducer = (state=intialState,action)=>
{
    const {type,payload} = action
   switch(type)
   {
    case USER_LOGIN_REQUEST:
        return{
            ...state,
            isLoading:true,
           
        };
        case USER_LOGIN_SUCCESS:
            localStorage.setItem("token", payload)
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload,
            };
        case USER_LOGIN_FAILURE:
            return{
                ...state,
                isLoading:false,
                isAuth:false,
                token:"",
            };
            case USER_LOGOUT_SUCCESS: {
                // localStorage.removeItem("token")
                return {
                    ...state,
                    isLoading:false,
                    isAuth:false,
                    // token:""
                }
              }
        default:
        return state
   }

}