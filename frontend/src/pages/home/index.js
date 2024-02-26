import { View, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import NavBar from "../../components/navbar";
import styles from "./styles";
import Card from "../../components/card";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Text } from "react-native-web";

export default function HomePage() {

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
                return (<Card key={index} hotel={item} />)
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


