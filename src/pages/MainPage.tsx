import { Text, View, Button,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen'
import DetailsScreen from '../components/DetailsScreen'
import React,{useEffect, useState } from 'react';


const stack = createNativeStackNavigator();
const TAG = "MainPage"
export default function App() {

  const [next,setNext] = useState(false)
  
  useEffect(()=>{
    console.log(TAG,"start------------");
    const timer = setTimeout(() => {
      console.log(TAG,"timeout"+next);
      setNext(true)
    }, 3000);

    return ()=>{
      console.log(TAG,"stop------------");
      clearTimeout(timer)
    }
  })
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor:"blue",
      padding: 20,
    },
    top: {
      flex: 0.3,
      backgroundColor: "grey",
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    middle: {
      flex: 0.3,
      backgroundColor: "beige",
      borderWidth: 5,
    },
    bottom: {
      flex: 0.3,
      backgroundColor: "pink",
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
  return (
    // <View style={styles.container}>
    //   <View style={styles.top} />
    //   <View style={styles.middle} />
    //   <View style={styles.bottom} />
    // </View>

    <View
    style={{
    height:'100%',
    width:'100%'}}>
      {
        next?<DetailsScreen/>:<HomeScreen/>
      }
    </View>
  );
}