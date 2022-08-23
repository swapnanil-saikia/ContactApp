import User from "../user/User"
import { createContext, useReducer} from "react"


 const UserData = [
    new User(1,"Swanil",24,"im","sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",222222),
    new User(4,"Swapnanil",24,"im","s",222222),
    new User(0,"Swapnanil",24,"im","s",222222),

]

export const UserContext = createContext({
    userData:[],
    addUser:({userName,userAge,userImage,userDescription,userPhone})=>{},
    deleteUser:(id)=>{},
    updateUser:(id)=>{},
})

function userReducer(state,action){
    switch(action.type) {
        case 'ADD':
            const id = 2;
           return [{...action.payload,id:id},...state];
        default:
            return state
    }
}

function UserContextProvider({children}){
   const [userState,dispatch] = useReducer(userReducer,UserData);

   function addUser(userData){
    dispatch({type:'ADD',payload:userData});
   }

   const value = {
    userData:userState,
    addUser:addUser,
    // updateUser:updateUser
   }
   
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;