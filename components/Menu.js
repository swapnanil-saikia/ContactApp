import React ,{ useState,useContext}from "react";
import {Menu} from "react-native-material-menu";

import {AsyncStorage, Image,Share, TouchableOpacity} from "react-native";
import  {MenuDivider}  from "react-native-popup-menu";
import { View, Text ,StyleSheet,Linking } from 'react-native';
import  {MenuItem} from 'react-native-material-menu';
import  Icon  from "react-native-vector-icons/Feather";
import { InputAccessoryView } from "react-native-web";
import { useDispatch } from "react-redux";
// import {Share} from 'react-native-share'
import {deleteUser} from '../data/Action'
export default function MenuComp({user}) {
  const [visible, setVisible] = useState(false);
    const dispatch = useDispatch()
  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  function call(){
    Linking.openURL('tel:'+user.userPhone)
  }

  function sms(){
    Linking.openURL('sms:'+user.userPhone)
  }

  function share(){
    Share.share({message:user.userPhone,url:'user.userPhone'})
  }

  function deleUser(){
dispatch(deleteUser(user.userId))
hideMenu()
  }
  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
       <Menu
        visible={visible}
        anchor={<Icon name="more-vertical" color={"black"} size={40}  onPress={showMenu}/>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={call}>Call</MenuItem>
        <MenuItem onPress={sms}>SMS</MenuItem>
        <MenuItem onPress={share}>share</MenuItem>
        {/* <MenuDivider /> */}
        <MenuItem onPress={deleUser}>Delete</MenuItem>
      </Menu>
     </View> 
       );
}


// export default function MenuComp() {
//     return (
//         <View style={styles.container}>
//           <MenuProvider style={styles.container}>
//           <Menu style={{}}>
//           <MenuTrigger style={{alignItems:'center',alignSelf:"center",justifyContent:'center'}}>
//             <Icon name="more-vertical" color={"black"} size={40} style={{alignItems:'center',justifyContent:'center'}}/>
//             </MenuTrigger>
//             <MenuOptions customStyles={{optionWrapper:{}}}>
//               <MenuOption onSelect={() => {}} text="Save" />
//               <MenuOption onSelect={() => alert(`Delete`)}>
//                 <Text style={{ color: 'red' }}>Delete</Text>
//               </MenuOption>
//               <MenuOption
//                 onSelect={() => alert(`Not called`)}
//                 disabled={true}
//                 text="Disabled"
//               />
//             </MenuOptions>
//           </Menu>
//           </MenuProvider>
//         </View>
//     );
//   }

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    // alignItems: 'center',
    // justifyContent:'flex-end',
    // paddingTop: 30,
    // height:100,
    // width:100,
    // backgroundColor: '#ecf0f1',
    // position:'relative',
    zIndex:0,
    overflow:'scroll'
  },
});