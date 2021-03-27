import React from "react";
import {View,Text,Button} from "react-native";
import styles from "./style";
export default function ({navigation,route}){
  const price=route.params.stock[route.params.id];
  return(
        <View style={styles.container}>
         <Text style={styles.text}>Product Description :</Text>
         <Text style={styles.text}>{route.params.content}</Text>
         <Text style={styles.text}>More orders less price:</Text>
         <Text style={styles.text}>Price: {price*10}$</Text>
         <Text style={styles.text}>Quantity: {route.params.stock[route.params.id]}</Text>
         <Button title="Go back" onPress={()=>navigation.navigate('Home',{stock:{...route.params.stock}})} />

        </View>    
  )              
               
} 