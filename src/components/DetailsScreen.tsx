
import React from 'react'
import TabFour from './TabFour';
import TabOne from './TabOne';
import TabThree from './TabThree';
import TabTwo from './TabTwo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {View,Text} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export default function DetailsScreen() {
    return (
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="TabOne" component={TabOne}/>
          <Tab.Screen name="TabTwo" component={TabTwo} />
          <Tab.Screen name="TabThree" component={TabThree} />
          <Tab.Screen name="TabFour" component={TabFour} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }