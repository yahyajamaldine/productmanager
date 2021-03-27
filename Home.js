import React,{useContext,useState}from 'react';
import styles from "./style";
import  {View,Text,Button} from "react-native";
import {StockProvider} from "./stockdata";


export default function Home({navigation,route}){
   //here we are getting a variable STOCK that contain an object and a function
   const [stock]=useContext(StockProvider);
   return(
      <View style={styles.container}>
      <Text style={styles.text}>Choose a Product to buy </Text>
      <Button title={`First Product ${stock.first===route.params?.stock.first?stock.first:(route.params?.stock===undefined?stock.first:route.params.stock.first)}`} onPress={()=>navigation.navigate("Details",{id:"first",
      title:"First Item",
      content:"First Product details",
      stock:stock===route.params?.stock?stock:(route.params?.stock===undefined?stock:route.params.stock)
      })}/>
      <Text style={styles.text}></Text>
      <Button title={`Second Product ${stock.second===route.params?.stock.second?stock.second:(route.params?.stock===undefined?stock.second:route.params.stock.second)}`}  onPress={()=>navigation.navigate("Details",{id:"second",
      title:"Second Item",
      content:"Second Product details",
      stock:stock===route.params?.stock?stock:(route.params?.stock===undefined?stock:route.params.stock)
      })}/>
      <Text style={styles.text}></Text>
      <Button title={`Third Product ${stock.third===route.params?.stock.third?stock.third:(route.params?.stock===undefined?stock.third:route.params.stock.third)}`}  onPress={()=>navigation.navigate("Details",{id:"third",
      title:"Third Item",
      content:"Third Product details",
      stock:stock===route.params?.stock?stock:(route.params?.stock===undefined?stock:route.params.stock)
      })}/>
      </View>
   )
}
/*route.params?.stock?(route.params?.stock.first==undefined?stock.first?):stock.first*/