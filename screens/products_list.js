import React ,{useEffect,useState} from "react";
import { View,Text,FlatList,StyleSheet } from "react-native";
import { getProduct } from "../services/services";
import{product} from "../components/product";

export function ProductsList(){
    function renderProduct({item:product}){
        return(
            <product 
            {...product}
            onPress={() => {
                navigation.navigate('ProductDetails',{productId: product.id})
            }}
            />

        )
    }
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        setProducts(getProduct());

})
    return(
       <FlatList
       styles={styles.product_list} 
       contentContainerStyle={styles.product_list_container}
       keyExtractor={(item) => item.id.toString()}
       data={products}
       renderItem={renderProduct}
       />
    )
}