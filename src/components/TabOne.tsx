import React from 'react'
import {View,Text,StyleSheet,StatusBar,FlatList} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,marginTop:StatusBar.currentHeight||0,
    },
    item:{

    },
    title:{
        fontSize:32
    }
});

const data=[
    {
        id:'1001',
        title:'one title'
    },
    {
        id:'1001',
        title:'one title'
    },
    {
        id:'1001',
        title:'one title'
    },
    {
        id:'1001',
        title:'one title'
    }
];
const ItemView = ({title}) =>{

    return(
        <View style={styles.item}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}
export default function TabOne({ navigation }){

    const renderItem = ({item})=>(
        <ItemView title ={item.title}/>
    );

    return(
        <View style={styles.container}>
        
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
        />
        </View>
    );
}