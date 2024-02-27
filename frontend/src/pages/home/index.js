import { View, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import NavBar from "../../components/header";
import styles from "./styles";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Text } from "react-native-web";
import CardComp from "../../components/card";

export default function HomePage({navigation}) {

    const [hotels, setHotels] = useState([]);

    const handleGetHotels = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:3030/api/hotel');
            setHotels(response.data);
        }
        catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        handleGetHotels();
    }, [])

    const renderHotels = (() => {
        return (
            hotels.map((item, index) => {
                return (<CardComp navigation={navigation} key={index} hotel={item} />)
            })
        )
    })

    return (
        <>
            <NavBar />
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.text}>
                        <Text>See package</Text>
                    </TouchableOpacity>
                </View>
                {renderHotels()}
            </View>
        </>
    )
}


