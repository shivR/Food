import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Restaurant = ({item}) => {
    return <View style = {styles.backgroundStyle}>
        <Image style={styles.imageStyle} source={{uri: item.image_url}}/>
        <Text style={styles.nameStyle}>{item.name}</Text>    
        <Text>{item.rating} stars, {item.review_count} ratings</Text>
    </View>
}

let styles = StyleSheet.create({
    backgroundStyle: {
        marginLeft: 15
    },
    nameStyle: {        
        fontSize: 18,
        fontWeight: '200'
    },
    imageStyle: {
        width: 200,
        height: 150,
        borderRadius: 3
    }
})

export default Restaurant;