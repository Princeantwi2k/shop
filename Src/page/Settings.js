import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Settings = () => {
    return (
        <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.topic}>Settings</Text>
        </View>
        <View style={styles.mains}>
      <Image  source={require("../../images/boss.jpg")} style={styles.pic} />

      <View style={styles.text}>
          <Text style={{color:"white",fontSize:30}}>Prince Antwi</Text>
          <Text style={{fontSize:17, color:"gray"}}>Hey there! i am using whatsApp</Text>
      </View>
      <MaterialCommunityIcons name="qrcode-scan" size={30} color="blue" style={styles.icon} />
        </View>
        <View style={styles.tree}>
        <TouchableOpacity>
            <View style={styles.icons}>
           
                <View style={styles.bars}>
                   
                <AntDesign name="star" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Starred Messages</Text>
                <AntDesign name="right" size={24} color="gray" />
               
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.bar}>
                <Octicons name="device-desktop" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Linded Device</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.day}>
        <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.key}>
                <Fontisto name="key" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Account</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.bar}>
                <Ionicons name="logo-whatsapp" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Chats</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.notify}>
                <Entypo name="notification" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Notifications</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.bar}>
                <MaterialCommunityIcons name="backup-restore" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Storage and Date</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.days}>
        <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.key}>
                <AntDesign name="info" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Help</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
            
        <TouchableOpacity>
            <View style={styles.icons}>
                <View style={styles.notify}>
                <AntDesign name="heart" size={24} color="white" />
                </View>
                <Text style={styles.lable}>Tell a Friend</Text>
                <AntDesign name="right" size={24} color="gray" />
            </View>
            </TouchableOpacity>
            
        </View>
      
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    main:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    topic:{
      color:"white",
      marginTop:40,
      fontSize:40,
      fontWeight:"800",
      paddingLeft:20
    },
    mains:{
        flex:1,
        backgroundColor:"#1f2124de",
        marginBottom:40,
        flexDirection:"row"
    },
    pic:{
    height:80,
    width:80,
    borderRadius:50,
    marginTop:10
    },
    text:{
     flex:1,
     marginHorizontal:30,
     marginVertical:20
    },
    icon:{
marginVertical:30
    },
   tree:{
    flex:1,
    backgroundColor:"#1f2124de",
    marginBottom:35,
    
   },
   icons:{
       marginVertical:3,
   flexDirection:"row",
   
   },
   bar:{
     backgroundColor:"#14cd87",
     padding:7,
     borderRadius:10
   },
   bars:{
     backgroundColor:"#cf9a0b",
     padding:7,
     borderRadius:10
   },
   lable:{
    flex:1,
    marginTop:5,
    paddingLeft:20,fontSize:20,
    color:"white"
   },
    day:{ flex:2,
        backgroundColor:"#1f2124de",
        marginBottom:20
    },
    key:{
        backgroundColor:"#3755ebde",
        padding:7,
        borderRadius:10
      },
   notify:{
        backgroundColor:"red",
        padding:7,
        borderRadius:10
      },
    days:{ flex:1,
        backgroundColor:"#1f2124de",
        marginBottom:30},
    
  
})

export default Settings;
