import { render } from "react-dom";
import { FlatList, View,Text, Pressable ,StyleSheet, Image} from "react-native";

function renderUserRow({user,onPress}){
    return (
        <View style={styles.listItem}>
         <Pressable style={styles.pres}
          onPress={onPress}>
            <View>
               <Image source={require('../data/download.png')} style={styles.image} />  
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
        </View>
    )
} 



export default renderUserRow

const styles = StyleSheet.create({
  listItem :{
   flex:1,
   margin:16,
   height:70,
   borderRadius:10, 
   backgroundColor:'white',
    elevation:10
   },

   image :{
    width:70,
    height:70,
    borderRadius:50
},
    pres:{
        flexDirection:'row'
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

    }

},
)