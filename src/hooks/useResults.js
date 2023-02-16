import {useState, useEffect} from "react";
import yelp from "../api/yelp"

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // Will call default category once on screen rendering
    useEffect(() => {
        fetchRestaurants('pasta')
    }, [])

    const fetchRestaurants = async (searchTerm) => {        
        try {
            const response = await yelp.get('search', {
                params: {
                    limit: 50,
                    term: searchTerm,            //term=term in short term
                    location: 'los angeles'
                }
            })
            setResults(response.data.businesses)
            console.log(response.data.businesses)
            setErrorMessage('')
        } catch(error) {
            setErrorMessage('Something went wrong')
        }        
    }

    return [fetchRestaurants, results, errorMessage]
}