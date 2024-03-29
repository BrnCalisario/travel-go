import styles from "./styles";
import { View, Image, Button, Text } from "react-native";
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import CustomTextLOS from "../CustomTextLOS";
import ModalComp from "../modal";
import Dropdown from '../dropdown';
import { FaHeart, FaHeartbeat, FaObjectGroup } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useCallback, useEffect } from "react";

const favorite = []

export default function CardComp({ hotel, navigation }) {
    const [heartFill, setHeart] = useState(false)
    // const [favorite, setFavorite] = useState([])

    const handleGetFavorite = useCallback(async () => {
        try {
            const obj = {
                id: sessionStorage.getItem("token")
            }
            const response = await axios.post('http://localhost:3030/api/hotel/Userfavorites', obj);
        }
        catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        handleGetFavorite();
    }, [])

    function Like(hotel) {
        if (!heartFill) {
            setHeart(!heartFill)
            favorite.push(hotel)
        }
        else {
            favorite = favorite.filter(item => item !== hotel);
            setHeart(!heartFill)
        }
    }

    return (
        <>
            <View style={styles.card}>
                <Image
                    style={{
                        height: 130,
                        width: '100%',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                    source={require("/assets/viagem.png")} // TODO: put hotel's img
                />
                <View style={styles.stars}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar style={{
                        color: '#D9D9D9'
                    }} />
                    <CustomTextLOS style={{
                        color: '#D9D9D9',
                        marginLeft: '4vw'
                    }}>
                        Hotel
                    </CustomTextLOS>
                    <View style={styles.heart}>
                        <AiFillHeart onClick={() => Like(hotel)}
                            style={
                                heartFill ? {
                                    width: "25px",
                                    height: "25px",
                                    color: "#be2929"
                                } :
                                    {
                                        display: "none"
                                    }} />
                        <AiOutlineHeart onClick={() => Like(hotel)}
                            style={
                                !heartFill ? {
                                    width: "25px",
                                    height: "25px",
                                } :
                                    {
                                        display: "none"
                                    }} />
                    </View>
                </View>
                <Text style={{ width: '95%' }}>
                    {hotel.hotelName}
                </Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '100%'
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            color: '#D9D9D9',
                        }}>
                        </Text>
                    </View>

                </View>
                <View style={styles.greenCard}>
                    <View style={styles.priceText}>
                        <Text style={{ marginBottom: 16 }}>
                            <ImLocation />
                            {hotel.state} - { }
                            {hotel.number}
                        </Text>
                        <Text>
                            {hotel.city}
                        </Text>
                        <Text style={{ color: '#005f00' }}>
                            U$: {hotel.price},00
                        </Text>
                    </View>
                    <View>
                        <CustomTextLOS style={{
                            marginBottom: 16,
                            color: '#005f00'
                        }}>
                            {hotel.amenities}

                        </CustomTextLOS>
                        {/* <Button
                            color='#028000'
                            title="See offer"
                        /> */}
                        <ModalComp navigation={navigation} />
                    </View>
                </View>
                <View style={{
                    width: '95%',
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}>
                    <Text style={{ color: 'white' }}>
                        a
                    </Text>
                </View>
                {/* <Dropdown /> */}
            </View>
        </>
    )
}