import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Restaurant from "./Restaurant";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({title, results}) => {    
    const navigation = useNavigation()

    if(!results.length) {
        return null
    }
    
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            style={styles.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            renderItem={(item) => {
                return <TouchableOpacity onPress={() => navigation.navigate("Detail", {id: item.item.id})}>
                    <Restaurant item={item.item}/>
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    list: {
        // margin: 8
    }
})

export default ResultsList