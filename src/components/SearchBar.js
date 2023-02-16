import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style = {styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {styles.textInput} 
            placeholder="Search" 
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={onTermSubmit}
        />
    </View>
}

let styles = StyleSheet.create({
    backgroundStyle: {
        height: 50,
        backgroundColor: '#F0EEEE',
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginVertical: 15
    },
    textInput: {
        flex: 1,
        marginRight: 10,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 10
    }
})

export default SearchBar;