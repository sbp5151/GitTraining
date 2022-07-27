import React,{useState,useEffect} from 'react';
import { Text, View, Button,ScrollView,StyleSheet} from 'react-native';
import ScreensNames from '../constants/ScreenNames';

const TAG = "HomeScreen"

export default function HomeScreen() {

  var timer = null
  function timeOutToDetails(){
    console.log("timeOutToDetails");
    timer =  setTimeout(toDetails, 10000);
  } 
  
  function clearTimeOut(){
    console.log("clearTimeOut");
    if(timer!=null){
      clearTimeout(timer);
    }
  }
  
  const toDetails = function(){
    console.log("toDetails");
  }

  useEffect( () =>{
    console.log(TAG,"start---------");
    timeOutToDetails();
    return ()=>{
      console.log(TAG,"stop---------");
      clearTimeOut();
    }
  });
  const styles = StyleSheet.create({
    container:{
      flex:1,
    }
  })
  return (
      <View style={{backgroundColor:"red",alignItems:'stretch',
      alignSelf:'stretch',
      alignContent:'center'}}>
        <Text style={{alignSelf:'center'}}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={toDetails}
        />
      </View>
    );
  }
  