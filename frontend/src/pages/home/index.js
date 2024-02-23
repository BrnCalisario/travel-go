import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import NavBar from "../../components/navbar";
import styles from "./styles";
import Card from "../../components/card";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";


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
                {/* <View style={styles.componentSearch}>
                    <View style={styles.component}>
                        <View style={styles.search}>
                            <View>
                                <BiSearch style={{
                                    fontSize: 30,
                                    color: 'gray'
                                }} />
                            </View>
                            <View>
                                <CustomTextLOS>
                                    To
                                </CustomTextLOS>
                                <TextInput
                                    placeholder="Brazil"
                                />
                            </View>
                        </View>
                        <View style={styles.componentOptions}>
                            < BsCalendarEvent style={{
                                fontSize: 20,
                                color: 'gray',
                                padding: 8,
                            }} />
                            <View style={{
                                borderRightWidth: 2,
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                            }}>
                                <CustomTextLOS>
                                    In/Out
                                </CustomTextLOS>
                                <TextInput
                                    placeholder="Select date"
                                />
                            </View>
                            <LiaBedSolid style={{
                                fontSize: 30,
                                color: 'gray',
                                marginLeft: 8
                            }} />
                            <View>
                                <CustomTextLOS>
                                    Guest and rooms
                                </CustomTextLOS>
                                <TextInput
                                    placeholder="3 guests, 1 room"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.componentFilter}>
                        <TouchableOpacity style={{
                            width: '50%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRightWidth: 2,
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                        }}>
                            <CustomTextLOS>
                                Order
                            </CustomTextLOS>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: '50%',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center',
                        }}>
                            <CustomTextLOS>
                                Filter
                            </CustomTextLOS>
                        </TouchableOpacity>
                    </View>
                </View> */}
                {renderHotels()}
            </View>
        </>
    )
}


