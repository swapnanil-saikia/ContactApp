import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState,useContext } from 'react';
import { UserContext } from '../data/UserData';
import { StyleSheet, Text, View, TextInput,SafeAreaView, Pressable} from 'react-native';
import { Button } from 'react-native';
export default function Form({navigation}) { 

    const userContext = useContext(UserContext)
    const [input,setInput] = useState({
        userName:'',
        userAge:'',
        userImage:'',
        userDescription:"",
        userPhone:""
    })

    function onChangeHandler(inputType,enteredValue){
        setInput((curValue)=>{
            return {
                ...curValue,
                [inputType]:enteredValue
            }
        })
    }
    function submit(){
        userContext.addUser(input)
        navigation.goBack()
 }

  return  (
    <View style={styles.main}>
        <SafeAreaView>
          <TextInput style={styles.input} keyboardType="default" placeholder='Name' onChangeText={onChangeHandler.bind(this,'userName')}/>
           <TextInput style={styles.input} keyboardType="numeric"  placeholder='Age' onChangeText={onChangeHandler.bind(this,'userAge')}/>
           <TextInput style={styles.input} keyboardType="numeric" placeholder='Phone' onChangeText={onChangeHandler.bind(this,'userPhone')}/>
           <TextInput style={styles.input} multiline numberOfLines={5} keyboardType="default"  placeholder='Tell About You' onChangeText={onChangeHandler.bind(this,'userDescription')}/>
           <Pressable style={styles.upload} onPress={submit}>
                 <Text>Upload Your photo</Text>
           </Pressable>
        </SafeAreaView>
        <View style={styles.action}>
            <Pressable style={styles.add} onPress={submit}>
                 <Text>Add user</Text>
           </Pressable>
           <Pressable style={styles.cancel} onPress={submit}>
                 <Text>Cancel</Text>
           </Pressable>
        </View>
    </View>
  );
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on yo app!</Text>
    //   <StatusBar style="auto" />
    // </View>
   
}

const styles = StyleSheet.create({
    main:{
        flexDirection:'column',
        marginHorizontal:20,
        marginVertical:16,
        borderColor:"purple",
        justifyContent:'center'
    },
  input: {
    borderRadius:10,
    borderColor:"purple",
    padding:10,
    margin:10,
    backgroundColor :'white',
    borderColor:'purple',
    borderWidth:2
},
    upload:{
        borderRadius:10,
        padding:10,
        margin:10,
        // marginLeft:50,
        // width:'70%',
        backgroundColor :'#12CDE6',
        borderColor:'purple',
        alignItems:"center",
    }
    ,
    action:{
        flexDirection:"row",
        justifyContent:'center',
    },
    add:{
        flex:1,
        borderRadius:10,
        padding:10,
        margin:10,
        // marginLeft:50,
        // width:'70%',
        backgroundColor :'green',
        borderColor:'purple',
        alignItems:"center",
    },
    cancel:{
        borderRadius:10,
        flex:1,
        padding:10,
        margin:10,
        backgroundColor :'red',
        borderColor:'purple',
        alignItems:"center",
    }
});
