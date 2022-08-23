import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashBoard from './screens/DashBoard';
import Details from './screens/Details';
import Form from './screens/Form'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import UserContextProvider from './data/UserData';
export default function App() {

  const stack = createNativeStackNavigator()

  return  (
    <>
    <UserContextProvider>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Das" component={DashBoard}/>
        <stack.Screen name="Form" component={Form}/>
        <stack.Screen name="Details" component={Details}/>
      </stack.Navigator>
    </NavigationContainer>
    </UserContextProvider>
    </>
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
