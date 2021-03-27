import React,{useContext} from "react";
import {NavigationContainer,CommonActions} from "@react-navigation/native";
import {createStackNavigator,HeaderBackButton} from "@react-navigation/stack";
import {Alert, Button} from "react-native";
import Home from "./Home";
import Details from "./Details";
import {Stock} from "./stockdata";

const Stack=createStackNavigator();
export default function App(){
   return(<Stock>
       <NavigationContainer >  
           <Stack.Navigator initialRouteName="Home" >
             <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="Details" component={Details} options={({navigation,route})=>({
               title:route.params.title,
               headerRight: () => (
                <Button
                title="Buy"
                 onPress={()=>{navigation.dispatch(CommonActions.setParams({
                  stock:{
                    ...route.params.stock,
                    [route.params.id]:route.params.stock[route.params.id]===0?0:route.params.stock[route.params.id]-1}}))}}
                disabled={route.params.stock[route.params.id]===0}   
                />
              ),
              headerLeft:()=>(<HeaderBackButton onPress={()=>navigation.navigate('Home',{stock:{...route.params.stock}})}/>)
            })}
             /> 
             </Stack.Navigator>                            
         </NavigationContainer>
   </Stock>)
         
};      