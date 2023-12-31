import styles from "./styles";
import { View, Image, Button, Text } from "react-native";
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import CustomTextLOS from "../CustomTextLOS";
import Modal from "../modal";
import Dropdown from '../dropdown';

export default function CardComp({ hotel }) {
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
                        {/* <CustomTextLOS style={{
                            marginRight: '2vw'
                        }}>
                            {hotel.state}
                        </CustomTextLOS> */}
                        <Text style={{
                            color: '#D9D9D9',
                        }}>
                        </Text>
                    </View>
                    {/* <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <ImLocation />
                        <CustomTextLOS style={{
                            color: '#D9D9D9',
                        }}>
                            {hotel.state}
                        </CustomTextLOS>
                    </View> */}
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
                        <Modal />
                    </View>
                </View>
                <View style={{
                    width: '95%',
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}>
                    <Text style={{color: 'white'}}>
                        a
                    </Text>
                </View>
                {/* <Dropdown /> */}
            </View>
        </>
    )
}