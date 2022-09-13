import User from '../user/User'

const int = {
    UserData :[new User(1,'ss',33,'s','r',5)]
}

export default function userReducer(state=int,action){
    switch(action.type) {
        case 'ADD':
            const id = new Date();
           return {...state, UserData:[...state.UserData,{userId:id,...action.payload}]};
        case 'UPDATE':
        const userIn=state.UserData.findIndex(
            (user)=>user.userId==action.payload.id
        );
         const updatableUser = state.UserData[userIn]
        const updatedUser = {...updatableUser, ...action.payload.data}
        const users=[...state.UserData]
        users[userIn] = updatedUser
        return {...state,UserData: users}
        case 'DELETE':
            return {...state,UserData:state.UserData.filter((user)=>
                 user.userId!==action.payload.id
            )};
        default:
            return state
    }
}
