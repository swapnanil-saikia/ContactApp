import { render } from "react-dom";
import { FlatList, View,Text,StyleSheet, SliderBase } from "react-native";
import Icon from "react-native-vector-icons/Feather"

function Details({route}){
    return (
        // <Card></Card>s
        <View style={styles.main}>
            <View style={styles.basic}>
                <Text style={styles.name}>{route.params.user.userName}</Text>
                <Text style={styles.age}>Age {route.params.user.userAge}</Text>
                <Text style={styles.age}>Phone {route.params.user.userPhone}</Text>
            </View>
            <View style={styles.basic}>
                <Text style={styles.profile}>Profile</Text>
                <Text style={styles.des}>{route.params.user.userDescription}</Text>
            </View>
  
        </View>

    );
}
export default Details

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center'
    },
    basic: {
     width:'80%',
     backgroundColor:'#12CDE6',
     marginTop:50,
     borderRadius:10,
     elevation:10,
     alignItems:'center',
     flexDirection:'column',
     justifyContent:'center',
     paddingVertical:6,
    },
    name:{
        fontSize:25
    },
    age:{
        fontSize:20,
    },
    profile:{
        fontSize:30
    },
    des:{
        padding:10,
        fontSize:20,
        fontWeight:'light'
    },
   
})