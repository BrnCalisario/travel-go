import styles from "./styles";
import { View, Image, Text, Button } from "react-native";
import { AiFillStar } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

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
                    <Text style={{
                        color: '#D9D9D9',
                        marginLeft: '4vw'
                    }}>
                        Hotel
                    </Text>
                </View>
                <Text style={{ width: '95%' }}>
                    Hotel Name
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
                            marginRight: '2vw'
                        }}>
                            9.1 - Excelent
                        </Text>
                        <Text style={{
                            color: '#D9D9D9',
                        }}>
                            (1983 avaliations)
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <ImLocation />
                        <Text style={{
                            color: '#D9D9D9',
                        }}>
                            São José do Rio Preto
                        </Text>
                    </View>
                </View>
                <View style={styles.greenCard}>
                    <View style={styles.priceText}>
                        <Text style={{ marginBottom: 16 }}>
                            Hyatt Hotels
                        </Text>
                        <Text style={{ color: '#005f00' }}>
                            R$ 348,00
                        </Text>
                    </View>
                    <View>
                        <Text style={{
                            marginBottom: 16,
                            color: '#005f00'
                        }}>
                            Include Breakfast
                        </Text>
                        <Button
                            color='#028000'
                            title="See offer"
                        />
                    </View>
                </View>
                <View style={{ width: '95%' }}>
                    <Text>
                        Our lowets price: R$ 400
                    </Text>
                </View>
            </View>
        </>
    )
}