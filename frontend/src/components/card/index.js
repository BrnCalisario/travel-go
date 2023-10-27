import styles from "./styles";
import { View, Image, Button } from "react-native";
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import CustomTextLOS from "../CustomTextLOS";

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
<<<<<<< HEAD
                <CustomTextLOS style={{ width: '95%' }}>
                    Hotel Name
                </CustomTextLOS>
=======
                <Text style={{ width: '95%' }}>
                    {hotel.name}
                </Text>
>>>>>>> 11f1a3b924f638c80a902a357924e15f6fb75f60
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
                        <CustomTextLOS style={{
                            marginRight: '2vw'
                        }}>
<<<<<<< HEAD
                            9.1 - Excelent
                        </CustomTextLOS>
                        <CustomTextLOS style={{
                            color: '#D9D9D9',
                        }}>
                            (1983 avaliations)
                        </CustomTextLOS>
=======
                            {hotel.score}
                        </Text>
                        <Text style={{
                            color: '#D9D9D9',
                        }}>
                            ({hotel.avaliations})
                        </Text>
>>>>>>> 11f1a3b924f638c80a902a357924e15f6fb75f60
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <ImLocation />
                        <CustomTextLOS style={{
                            color: '#D9D9D9',
                        }}>
<<<<<<< HEAD
                            São José do Rio Preto
                        </CustomTextLOS>
=======
                            {hotel.location}
                        </Text>
>>>>>>> 11f1a3b924f638c80a902a357924e15f6fb75f60
                    </View>
                </View>
                <View style={styles.greenCard}>
                    <View style={styles.priceText}>
<<<<<<< HEAD
                        <CustomTextLOS style={{ marginBottom: 16 }}>
                            Hyatt Hotels
                        </CustomTextLOS>
                        <CustomTextLOS style={{ color: '#005f00' }}>
                            R$ 348,00
                        </CustomTextLOS>
=======
                        <Text style={{ marginBottom: 16 }}>
                            {hotel.company}
                        </Text>
                        <Text style={{ color: '#005f00' }}>
                            {hotel.price}
                        </Text>
>>>>>>> 11f1a3b924f638c80a902a357924e15f6fb75f60
                    </View>
                    <View>
                        <CustomTextLOS style={{
                            marginBottom: 16,
                            color: '#005f00'
                        }}>
<<<<<<< HEAD
                            Include Breakfast
                        </CustomTextLOS>
=======
                            {hotel.includes}
                        </Text>
>>>>>>> 11f1a3b924f638c80a902a357924e15f6fb75f60
                        <Button
                            color='#028000'
                            title="See offer"
                        />
                    </View>
                </View>
                <View style={{
                    width: '95%',
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}>
<<<<<<< HEAD
                    <CustomTextLOS>
                        Our lowets price: R$ 400
                    </CustomTextLOS>
=======
                    <Text>
                        {hotel.lowestPrice}
                    </Text>
>>>>>>> 11f1a3b924f638c80a902a357924e15f6fb75f60
                </View>
            </View>
        </>
    )
}