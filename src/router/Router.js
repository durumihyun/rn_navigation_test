import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import MyProfile from '../screens/MyProfile';
import Newspeed from '../screens/Newspeed';
import Search from '../screens/Search';
import Setting from '../screens/Setting';


const TabNavigation = () => {
  return(
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="Newspeed" component={Newspeed}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="MyProfile" component={MyProfile}/>
    </Tab.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyProfile" component={TabNavigation} />
        <Stack.Screen name="Newspeed" component={Newspeed} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
