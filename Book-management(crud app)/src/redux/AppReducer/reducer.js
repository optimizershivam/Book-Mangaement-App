import * as types from "./action.types"

const initialstate={
    books:[],
    isloading:false,
    iserror:false
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_BOOKS_REQUEST:
            return{
                ...state,
               
                isloading:true,
                iserror:false,
            }
        case types.GET_BOOKS_SUCCESS:
            return{
                ...state,
                books:payload,
                isloading:true,
                iserror:false,
            }
        case types.GET_BOOKS_FAILURE:
            return{
                ...state,
               
                isloading:true,
                iserror:true,
            }
        default:
            return state
    }
}