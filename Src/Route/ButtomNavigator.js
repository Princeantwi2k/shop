import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import Call from "../page/Call"
import Status from "../page/Status"
import Camera from "../page/Camera"
import Chat from "../page/Chat"
import Settings from "../page/Settings"

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor:"black"
        },
      }}
    >
      <Tab.Screen
        name="status"
        component={Status}
        options={{
          headerShown:false,
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-sync-circle-outline" size={30} color="white" />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel:true,
          tabBarLabelStyle:{
              fontSize:15,
              alignSelf: "center",
              fontWeight: "bold",
              color:"white"
          }
        }}
      />
      <Tab.Screen
        name="call"
        component={Call}
        options={{
        
          headerShown:false,
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-call-outline" size={30} color="white" /> 
          ),
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel:true,
          tabBarLabelStyle:{
              fontSize:15,
              alignSelf: "center",
              fontWeight: "bold",
              color:"white"
          }
        }}
      />
      <Tab.Screen
        name="camera"
        component={Camera}
        options={{
          headerShown:false,
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Feather name="camera" size={30} color="white" />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel:true,
          tabBarLabelStyle:{
              fontSize:15,
              alignSelf: "center",
              fontWeight: "bold",
              color:"white"
          }
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          title: "Chat",
          headerStyle: {
            backgroundColor: "black",
            height: 60,
           
          },
          headerTintColor: "#404040",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
            alignSelf: "center",
            color:"white"
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="email-plus" size={24} color="white" style={{marginRight:10}}/>
            </View>
          ),
          headerLeft: () => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{marginLeft:10,color:"white"}}>Eidth</Text>
            </View>
          ),
          headerShown: true,
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={30} color="white" />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel:true,
          tabBarLabelStyle:{
              fontSize:15,
              alignSelf: "center",
              fontWeight: "bold",
              color:"white"
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown:false,
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel:true,
          tabBarLabelStyle:{
              fontSize:15,
              alignSelf: "center",
              fontWeight: "bold",
              color:"white"
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({}); 