import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../page/Homepage';
import DetailScreen from '../page/DetailScreen';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Missed from '../page/Missed';



const Stack = createStackNavigator()

const Navigation= () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={
           {headerShown: false} 
        }>
            <Stack.Screen name="Home" component={Homepage}   />
            <Stack.Screen name="details" component={DetailScreen} />
            <Stack.Screen name="missed" component={Missed} />
        </Stack.Navigator>
    </NavigationContainer>
}


export default Navigation;
