
   export var addUser = (userData)=>({
    type:'ADD',payload:userData
   })
   export var updateUser = (id,data)=>({
  type:'UPDATE',payload:{id:id,data:data}
   })
    export const  deleteUser=(id)=>(
    {type:'DELETE',payload:{id:id}}
   )
