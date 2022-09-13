import { render } from "react-dom";
import { FlatList, View,Text, Pressable ,StyleSheet, Image} from "react-native";
import MenuComp from "./Menu";
import Icon from 'react-native-vector-icons/Feather'

function renderUserRow({user,onPress,show}){
    return (

        <View style={styles.listItem}>
         <Pressable style={styles.pres}
          onPress={onPress}>
            <View>
            
               {/* <Image source={require('../data/download.png')} style={styles.image} /> */}
               <Image source={{uri:user.userImage}} style={styles.image}></Image>
             </View>

             <View style={styles.colomn}>
              <View style={styles.name}>
                   <Text>
                      {user.userName}
                   </Text>
              </View>
              <View style={styles.age}>
                   <Text>
                      {user.userAge}
                   </Text>
              </View> 
              </View>            
            </Pressable>
              <View style={styles.menu}>  
                    <Pressable>
                 <MenuComp user={user}> </MenuComp>
               </Pressable>
            </View> 
            
        </View>    
        // {/* {/* <View style={styles */}
        )
} 



export default renderUserRow

const styles = StyleSheet.create({
  listItem :{
   flex:1,
   margin:16,
//    margin:16,
   height:70,
//    position:'relative',
   borderRadius:10, 
   backgroundColor:'white',
    elevation:10,
    flexDirection:'row',
    // overflow:'scroll',
    // zIndex:1
    // width:'100%'
   },

   image :{
    width:70,
    height:70,
    borderRadius:50
},
    pres:{
        flexDirection:'row',
        // width:'100%'
    },
    name:{
        marginLeft:30,
        marginTop:10
    },
    age:{
        marginLeft:30,
        marginTop:10

    },
    colomn:{
        flexDirection:"column",

    },
    menu:{
        alignItems:'flex-end',
        justifyContent:'center',
        alignSelf:'center',
        flex:1,
        // zIndex:1
        // height:2300
        
    }

},
)