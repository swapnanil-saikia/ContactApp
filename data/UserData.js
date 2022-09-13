import User from "../user/User"
// import {AsyncStorage} from 'react-native'
import {createStore} from 'redux'
import {persistReducer,persistStore} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage"
import  userReducer  from "./Reducer"
// const int = {
//     UserData :[new User(1,'ss',33,'s','r',5)]
// }

// function userReducer(state=int,action){
//     switch(action.type) {
//         case 'ADD':
//             const id = new Date();
//            return {...state, UserData:[...state.UserData,{userId:id,...action.payload}]};
//         case 'UPDATE':
//         const userIn=state.UserData.findIndex(
//             (user)=>user.userId==action.payload.id
//         );
//          const updatableUser = state.UserData[userIn]
//         const updatedUser = {...updatableUser, ...action.payload.data}
//         const users=[...state.UserData]
//         users[userIn] = updatedUser
//         return {...state,UserData: users}
//         case 'DELETE':
//             return {...state,UserData:state.UserData.filter((user)=>
//                  user.userId!==action.payload.id
//             )};
//         default:
//             return state
//     }
// }

//    export var addUser = (userData)=>({
//     type:'ADD',payload:userData
//    })
//    export var updateUser = (id,data)=>({
//   type:'UPDATE',payload:{id:id,data:data}
//    })
//     export const  deleteUser=(id)=>(
//     {type:'DELETE',payload:{id:id}}
//    )

const persistConfig  = {
 key:'root',
storage: AsyncStorage
 }
 const persistReduer = persistReducer(persistConfig,userReducer)
export const store  = createStore(persistReduer)
export const persist   =  persistStore(store);

// export default UserContextProvider;