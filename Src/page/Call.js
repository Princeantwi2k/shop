import React from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
const DATA = [
    {
        id: Math.random().toString(),
        pic: require("../../images/nana.jpg"),
        name:"Sweet sis",
        time: "7:10 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/eugene.jpg"),
        name:"Eugene",
        time: "7:00 pm",
        details:"Incoming"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "6:00 pm",
        details:"Incoming"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/nana.jpg"),
        name:"Sweet sis",
        time: "5:30 pm",
        details:"Outgoing"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "5:20 pm",
        details:"Outgoing"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "5:00 pm",
        details:"incoming"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "4:00 pm",
        details:"outgoing"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yo.jpg"),
        name:"Yoshi",
        time: "3:50 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yo.jpg"),
        name:"Yoshi",
        time: "3:44 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "3:30 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "3:00 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "2:00 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/yaw.jpg"),
        name:"Nana Yaw",
        time: "1:00 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/regina.jpg"),
        name:"Regina",
        time: "1:00 pm",
        details:"Missed"
        
    },
    {
        id: Math.random().toString(),
        pic: require("../../images/raheal.jpg"),
        name:"Raheal",
        time: "1:00 pm",
        details:"Missed"
        
    },
]



const File = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.cal}>
           <Text style={{marginTop:30,marginLeft:10,color:"white"}}>Eidth</Text>
           <TouchableOpacity>
           <Text style={{marginTop:30,marginRight:40,marginLeft:100,fontSize:17,color:"white"}}>All</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=> {navigation.navigate("missed")}}>
           <Text style={{marginTop:30,marginRight:100,fontSize:17,color:"white"}}>Missed</Text>
           </TouchableOpacity>
           <Text style={{marginTop:30,color:"white"}}><MaterialIcons name="add-ic-call" size={24} color="white" /></Text>
           <Text style={{fontSize:30,fontWeight:"bold",color:"white",paddingLeft:20}}>Calls</Text>
                        
                   
           </View>
           <View style={styles.topic}>
               <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>Calls</Text>
           <TextInput placeholder="shearch" style={{backgroundColor:"gray",
      padding:15,marginHorizontal:10,borderRadius:10,marginTop:10,paddingLeft:40}} />
      <EvilIcons name="search" size={29} color="black" style={{position:"absolute",top:60,left:20}}/>
           </View>
           <View style={styles.cals}>
            <FlatList 
            data={DATA} 
            renderItem={({item})=>{
                return( <View>
                
                    <View>
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
            <Ionicons name="information-circle-outline" size={24} color="blue" style={{marginTop:15,}} />
            </View>
          </View>
          </TouchableOpacity>
                    </View>
                </View>)
            }}
        keyExtractor={item => item.id}

            />
           </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    
},
cal:{
    flex:0.5,
    flexDirection:"row",
    backgroundColor:"black"
},
topic:{
    flex:1,
    backgroundColor:"black"
},
cals:{
    flex:4,
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
    flex:2,
    marginHorizontal:10,
    marginTop:15,
  
 
  },
  times:{
    flex:1,
    flexDirection:"row",
  
  
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

export default File;
