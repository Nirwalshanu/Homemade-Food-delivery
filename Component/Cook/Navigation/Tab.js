import React from 'react';
import { Image, StyleSheet,View,Button, Text,TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
//screens

import Home from '../Screens/Home';
import Notification from '../Screens/Notification';

const Tab = createMaterialBottomTabNavigator();
class Tabnavigation extends React.Component{
    render(){
        return(
            <Tab.Navigator activeColor="#f5da90" inactiveColor="#3e2465"shifting={true} initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}
            options={{
            tabBarIcon:()=>(<Icons name={'ios-home'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#ceed91',
            }}
             />
             
            
            <Tab.Screen name="Notification" component={Notification} 
            options={{
            tabBarIcon:()=>(<Icons name={'ios-notifications-circle-outline'} style={{color:'orange'}} size={25}/>),
            tabBarColor:'#84f5d5',
            
            }}

            />
            <Tab.Screen name="Earnings" component={Notification} 
            options={{
            tabBarIcon:()=>(<Icons name={'md-wallet'}  style={{color:'orange'}} size={25}/>),
            tabBarColor:'#f5aed6',
            
            }}

            />
           
          </Tab.Navigator>
        );
    }
}
export default Tabnavigation;