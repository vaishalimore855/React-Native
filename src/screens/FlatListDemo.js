import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
const FlatListDemo = () => {
    const names = [
        {
            name: "Vaishali"
        },
        {
            name: "Mohini"
        },
        {
            name: "Shital"
        },
        {
            name: "Neha"
        },
        {
            name: "Trupti"
        },
        {
            name: "Sanchita"
        },
        {
            name: "Payal"
        },
        {
            name: "Rutuja"
        }
    ]
    return (
        <FlatList style={styles.listStyle}
        // horizontal
        showsHorizontalScrollIndicator={false}
        inverted
         data={names} renderItem={(elem) => {
            console.log( elem.item.name)
            return <Text style={styles.textStyle}>{elem.item.name}</Text>

        }} />
        )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:"20px",
        color:"black",
        textAlign:"center",
        backgroundColor:"white",
        marginLeft:"50px",
        marginTop:"40px",
        width:"200px",
        height:"50px",
        paddingTop:"8px"
       


    },
    listStyle:{
        backgroundColor:"black",
        width:"20%",
        marginBottom:"10px",
        height:'auto'
    }

})
export default FlatListDemo