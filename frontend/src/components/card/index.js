import styles from "./styles";
import { View, Image, Button } from "react-native";
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import CustomTextLOS from "../CustomTextLOS";

export default function CardComp() {
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
                    source={require("/assets/viagem.png")}
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
                <CustomTextLOS style={{ width: '95%' }}>
                    Hotel Name
                </CustomTextLOS>
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
                            9.1 - Excelent
                        </CustomTextLOS>
                        <CustomTextLOS style={{
                            color: '#D9D9D9',
                        }}>
                            (1983 avaliations)
                        </CustomTextLOS>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <ImLocation />
                        <CustomTextLOS style={{
                            color: '#D9D9D9',
                        }}>
                            São José do Rio Preto
                        </CustomTextLOS>
                    </View>
                </View>
                <View style={styles.greenCard}>
                    <View style={styles.priceText}>
                        <CustomTextLOS style={{ marginBottom: 16 }}>
                            Hyatt Hotels
                        </CustomTextLOS>
                        <CustomTextLOS style={{ color: '#005f00' }}>
                            R$ 348,00
                        </CustomTextLOS>
                    </View>
                    <View>
                        <CustomTextLOS style={{
                            marginBottom: 16,
                            color: '#005f00'
                        }}>
                            Include Breakfast
                        </CustomTextLOS>
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
                    <CustomTextLOS>
                        Our lowets price: R$ 400
                    </CustomTextLOS>
                </View>
            </View>
        </>
    )
}