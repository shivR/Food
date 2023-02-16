import React, {useState, useEffect} from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultDetail = ({route}) => {    
    const {id} = route.params
    const [images, setImages] = useState(null)

    const getImages = async (id) => {
        console.log(id)
        const response = await yelp.get(`/${id}`)
        setImages(response.data.photos)
    }

    useEffect(() => {
        getImages(id)
    }, [])
    
    if (!images) {
        return null
    }
    
    return (
    <>
        <FlatList 
            data={images}
            renderItem={(item) => {
                return <Image style={styles.image} source={{uri: item.item}}></Image>
            }}            
        />
    </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        alignSelf:'center',
        marginTop: 8
    }
})
export default ResultDetail;