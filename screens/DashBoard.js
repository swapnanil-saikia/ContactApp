import { StyleSheet, FlatList, View,Text, Pressable } from "react-native";
import { UserContext} from "../data/UserData"
import UserRow from "../components/UserRow";
import Icon from "react-native-vector-icons/Feather";
import { useContext } from "react";


function DashBoard({navigation}){
    const userContext = useContext(UserContext)

const UserData = userContext.userData
    function renderUserList(itemData){
     function pressHandler(){
        navigation.navigate('Details',{
            user:itemData.item
        })
     } 

    return <UserRow user={itemData.item} onPress={pressHandler}/>
} 

function pressHandler(){
    navigation.navigate('Form')
 } 
    return (
        <>
        <FlatList
            data={UserData}
            keyExtractor={(item)=>{item.id}}
            renderItem={renderUserList}
        />
        <Pressable onPress={pressHandler}>
        <View style={styles.ico}>
                <Icon name="plus" color={"#12CDE6"} size={60}/>
            </View>
        </Pressable>

        </>
     );
}
export default DashBoard

const styles=StyleSheet.create( {
ico:{  
    marginBottom:10,
    marginRight:10,
    fontSize:60,
    alignItems:'flex-end',
    justifyContent:'flex-end'
 }})