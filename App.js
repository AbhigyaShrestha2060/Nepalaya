import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ProductsList} from "./screens/products_list.js";

const stack=createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen />name"products" component={ProductsList} 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container:{
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  },
  text:{
    fontSize:30,
    fontWeight:"bold",  
  }
})
export default App;
