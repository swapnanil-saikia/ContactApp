import { StyleSheet, FlatList, View,Text, Pressable, AsyncStorage } from "react-native";
 import Icon from "react-native-vector-icons/Feather";
import {useEffect,useLayoutEffect,useState } from "react";
import MenuComp from "../components/Menu";
import Search from "../components/Search";
import UserRow from '../components/UserRow'
import { useDispatch,useSelector } from "react-redux";

function DashBoard({navigation}){
     show =false;

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState()
    const UserData =  useSelector(state=>state.UserData)
    var [user,setUser]=useState([])
    const [userData,setUserData]= useState(UserData)
    const dispatch = useDispatch()


    
const l= async() => {
    // let s =  await AsyncStorage.getItem('D')
    console.log(UserData)
    // setUserData(JSON.parse(s))
    // setUser(JSON.parse(s))
}
    useLayoutEffect(()=>{
        
        navigation.setOptions({
            headerRight:()=>{
                return <Search clicked={clicked}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                setCLicked={setClicked}
                setUserData={setUserData}
        ></Search>
            }
        })
    })
   useEffect(()=>{
    //    var UserData = userContext.userData
    // Data.createTable();
    console.log()
      l()
 var result=[]
    var filterUserData = UserData.filter((searchPhrse)=>{
        return searchPhrse.userName.toString().includes(searchPhrase)
         })
        setUserData(filterUserData) 
     
        // /        console.log(UserData[0].userName)

    },[UserData,searchPhrase])

// const UserDwta = userContext.userData
    function renderUserList(itemData){
     function pressHandler(){
        navigation.navigate('Details',{
            user:itemData.item
        })
     } 

    return <UserRow user={itemData.item} onPress={pressHandler} sho={show}/>
} 

function show(){
    show=true;
}
function filter(seachPhrase){
     UserData.filter((searchPhrase)=>{
        UserData.userName.contains(searchPhrase)
    })
}
function pressHandler(){
    navigation.navigate('Form',{action:'ad',label:"Add"})
 } 
    return (
        <>
        <FlatList
            data={userData}
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
    // maxWidth20,
    // fontSize:60,
    alignItems:'flex-end',
    justifyContent:'flex-end'
 }})