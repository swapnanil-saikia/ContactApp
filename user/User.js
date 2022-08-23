import { TouchableHighlightBase } from "react-native";

class User{
    constructor(id,userName,userAge,userImage,userDescription,userPhone){
        this.id=id;
        this.userAge=userAge;
        this.userDescription=userDescription;
        this.userName=userName;
        this.userImage=userImage;
        this.userPhone=userPhone
    }
}

export default User