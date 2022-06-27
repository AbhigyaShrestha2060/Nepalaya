import React from "react";
import { Text,Image,View, Stylesheet, TouchableOpacity } from "react-native";

export default function Product({ name,price,image, onPress }) {
    return(
        <TouchableOpacity styles={styles.card} onPress={onPress}>
            <Image styles={styles.image} source={image}/>
            <View styles={styles.infoContainer}>
                <Text styles={styles.name}>{name}</Text>
                <Text styles={styles.price}>$ {price}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        boarderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        margin:'4%',
    }
})