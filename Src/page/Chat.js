import React from 'react';
import {View,Text, StyleSheet, FlatList,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

 

  const DATA = [
    {
      id: Math.random().toString(),
      pic:require("../../images/eugene.jpg"),
      name:"Eugene",
      details:"hw b",
      time:"4:20PM" 
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/me.jpg"),
      name:"Kojo monies",
      details:" yo wossop",
      time:"4:15PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/may.jpg"),
      name:"Kofi b",
      details:"you go come",
      time:"4:15PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/kwame.jpg"),
      name:"Paul Afoko",
      details:"  No oooo",
      time:"4:04PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/ephyah.jpg"),
      name:"Ephyah",
      details:"hi",
      time:"4:00PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/nana.jpg"),
      name:"Sweet sis",
      details:"i have sent you some money",
      time:"3:55PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/dream.png"),
      name:"DTF FREAKY FUNKY FRINDAY",
      details:"+2335566373629  No oooo",
      time:"3:45PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/yaw.jpg"),
      name:"Nana Yaw",
      details:"you com around anaaa",
      time:"2:45PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/baya.jpg"),
      name:"Bayana",
      details:"are you home",
      time:"2:40PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/bata.jpg"),
      name:"Bertha",
      details:"hi dear",
      time:"2:30PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/cell.jpg"),
      name:"Cell 2",
      details:"+23354546554 good to hear that",
      time:"2:45PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/raheal.jpg"),
      name:"Raheal",
      details:"message me small",
      time:"2:00PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/regina.jpg"),
      name:"Regina",
      details:"hi",
      time:"1:45PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/blues.png"),
      name:"CHELSEA FC ",
      details:"Kojo we go win them ",
      time:"1:35PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/akua.jpg"),
      name:"Akua",
      details:"hello",
      time:"12:45PM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/tigo.jpg"),
      name:"Tigo Boss",
      details:"you dey house",
      time:"11:50 AM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/yo.jpg"),
      name:"Yoshi",
      details:"men at work",
      time:"11:45 AM"
    },
    {
      id: Math.random().toString(),
      pic:require("../../images/pastor.jpg"),
      name:"Camp Eyc21",
      details:"+233 554467658  yes ma",
      time:"10:45 AM"
    },
  ]

 
  const Chat = () => {

  return (
    <View style={styles.container}>
      <View style={styles.Chathead}>
  
       <TextInput placeholder="shearch" style={{backgroundColor:"gray",
      padding:10,marginHorizontal:10,borderRadius:10,marginTop:20,paddingLeft:40}} />
      <EvilIcons name="search" size={29} color="black" style={{position:"absolute",top:30,left:20}}/>
       <View style={styles.Chattext}>
         <TouchableOpacity>
           <Text style={{fontSize:20,color:"white"}}>
             Broadcast List
           </Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:20,color:"white"}}>
           New Group
           </Text>
         </TouchableOpacity>
       </View>
      </View>
      
      <View style={styles.Chatcontent}>
      <FlatList 
      data={DATA}
      renderItem={({item})=>{
        return(
          <TouchableOpacity >
          <View style={styles.list}>
            <View style={styles.pic}>
            <Image source={item.pic} style={styles.picture} />
            </View>
            <View style={styles.text}>
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.details}>
                {item.details}
              </Text>
              
            </View>
            <View style={styles.times}>
            <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
          </TouchableOpacity>
        )
      }} 
      keyExtractor={item => item.id}

        />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Chathead:{
    flex:1,
    backgroundColor:"black"
    
  },
  Chattext:{
    marginVertical:30,
    flexDirection:"row",
    justifyContent:"space-between"
  },
 
  Chatcontent:{
    flex:3,
    backgroundColor:"black"
  },
  list:{
    flexDirection:"row",
    marginBottom:14
  },
  picture:{
    height:70,
    width:70,
    borderRadius:50,
    marginHorizontal:10,
    flex:1
  },
  pic:{
   flex:1,
   marginHorizontal:5,
   
  },
  text:{
    flex:3,
    marginHorizontal:10,
    marginTop:15,
 
  },
  times:{
    flex:1,
  
  },

  name:{
   color:"white",
   fontSize:16,
   fontWeight:"bold"
    
  },
  details:{
  color:"white"
  },
  time:{
    flex:1,
   
    marginTop:15,
    fontSize:18,color:"white"
  }
})

export default Chat;
