import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashBoard from './screens/DashBoard';
import Details from './screens/Details';
import Form from './screens/Form'
import User from './user/User'
import MenuComp from './components/Menu'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import UserContextProvider from './data/UserData';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { DrawerLayout } from 'react-native-gesture-handler';
 import {store, persist} from './data/UserData';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen';
export default function App() {


  // if(Animal.tableName=='ee'){
  //   Animal.createTable()
  // }

  useEffect(()=>{
    SplashScreen.hide()
  },[])
  const stack = createNativeStackNavigator()
  const drawer = createDrawerNavigator(); 

  function DrawerNavigate(){
    return (
    <drawer.Navigator>
    <drawer.Screen name='Home' component={DashBoard}></drawer.Screen>
      <drawer.Screen name='My Proflie' component={Details} initialParams={{user:new User(1,'swapnani',2,'','ddd',0)}}></drawer.Screen>
    {/* </drawer.Screen> */}
    </drawer.Navigator>
    )
  }

  return  (

     <Provider store = {store}>
    <PersistGate loading={null} persistor={persist}>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="s" component={DrawerNavigate} options={{
          headerShown:false,
        }
        }/>
        <stack.Screen name="Form" component={Form} options={{
          gestureEnabled:false
        }}/>
        <stack.Screen name="Details" component={Details} options={()=>{ return <MenuComp/>}}/>
      </stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
     
  );
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on yo app!</Text>
    //   <StatusBar style="auto" />
    // </View>
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
