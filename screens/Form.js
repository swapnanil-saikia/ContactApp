import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState,useLayoutEffect } from 'react';
import {  } from '../data/UserData';
import { StyleSheet, Text, View, TextInput,SafeAreaView, Pressable, Alert,Image, BackHandler} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker'
// import NativeUploady from '@rpldy/native-uploady'
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';   
import { BaseNavigationContainer } from '@react-navigation/native';
import download from '../data/download.png'
import { addUser ,updateUser } from '../data/Action';
export default function Form({navigation,route}) { 
    const action = route.params.action
    var label=route.params.label
    var user = null;
    const dispatch = useDispatch()
    if(label=='Edit'){
        user=route.params.user

    } 
    // edit=false
    const  i= Image.resolveAssetSource(download).uri
    useEffect(()=>{
        if(action=="edit"){
        //  edit=true
         label='Edit'
         console.log(label)
        }
        console.log(action)
        
     BackHandler.addEventListener('hardwareBackPress', (e) => {
    
            // Prevent default behavior of leaving the screen
            // e.preventDefault();
    

            // Prompt the user before leaving the screen
            // navigation.preventDefault()
            console.log(e)
            Alert.alert(
              'Discard changes?',
              'You have unsaved changes. Are you sure to discard them and leave the screen?',
              [
                { text: "Don't leave", style: 'cancel', onPress: () => {} },
                {
                  text: 'Discard',
                  style: 'destructive',
                  // If the user confirmed, then we dispatch the action we blocked earlier
                  // This will continue the action that had triggered the removal of the screen
                  onPress: () => navigation.goBack(),
                },
            ]
            );
            
          }
          )
        return BackHandler.removeEventListener('hardwareBackPress')
        },
        []
      );
   const options={
        title :'i',
        type:'library',
        options:{
            maxHeight:100,
            maxWidth:100,
            selectionLimit:0,
            includeBase64:false,
            mediaType:'photo'
        }
    }

    // const userContext = useContext(UserContext)
    const [input,setInput] = useState({
        userName:user?user.userName:'',
        userAge:user?user.userAge.toString():'',
        userImage:user?user.userImage:i,
        userDescription:user?user.userDescription:"",
        userPhone:user?user.userPhone.toString():""
    })

    function onChangeHandler(inputType,enteredValue){
        setInput((curValue)=>{
            return {
                ...curValue,
                [inputType]:enteredValue
            }
        })
    }
    function cancel(){
        navigation.goBack()
    }
     function submit(){

        if(input.userPhone==''){
            Alert.alert("Phone No is empty")
            return
        }
        
        if(label=='Edit'){
            // userContext.updateUser(user.userID,input)
            dispatch(updateUser(user.userId,input))
            navigation.navigate("s")
        }
        else{
            dispatch(addUser(input))
            // Animal.createTable()
            // Animal.create(new Animal(input)).then(()=>{})
        // userContext.addUser(input)
        navigation.goBack()
        }
        // navigation.goBack()
 }

  const upload = async ()=>{
       const image = await launchImageLibrary(options)
       setInput((curValue)=>{
        return {
            ...curValue,
            userImage:image.assets[0].uri
        }
       }) 
       console.log(image?.assets[0])
    }
 

  return  (
    <View style={styles.main}>
        <SafeAreaView>
          <TextInput style={styles.input} keyboardType="default" value={input.userName} placeholder='Name' onChangeText={onChangeHandler.bind(this,'userName')}/>
           <TextInput style={styles.input} keyboardType="numeric" value={input.userAge}  placeholder='Age' onChangeText={onChangeHandler.bind(this,'userAge')}/>
           <TextInput style={styles.input} keyboardType="numeric" value={input.userPhone}  placeholder='pho' onChangeText={onChangeHandler.bind(this,'userPhone')}/>
           <TextInput style={styles.input} keyboardType="default" value={input.userDescription} placeholder='Tell About perso' onChangeText={onChangeHandler.bind(this,'userDescription')}></TextInput>
           <Pressable style={styles.upload} onPress={upload}>
                 <Text>Upload Your photo</Text>
           </Pressable>
        </SafeAreaView>
        <View style={styles.action}>
            <Pressable style={styles.add} onPress={submit}>
                 <Text>{label}</Text>
           </Pressable>
           <Pressable style={styles.cancel} onPress={cancel}>
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
