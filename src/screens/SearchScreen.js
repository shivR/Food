import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultList";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [fetchRestaurants, results, errorMessage] = useResults()

    const filterResultsBy = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)} 
            onTermSubmit={() => fetchRestaurants(term)}            
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList title='Cost Effective' results={filterResultsBy('$')} />
            <ResultsList title='Bit Pricier' results={filterResultsBy('$$')}  />
            <ResultsList title='Big Spender' results={filterResultsBy('$$$')} />
        </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }
})
export default SearchScreen;