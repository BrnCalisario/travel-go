import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { BiSearch } from 'react-icons/bi';
import { BsCalendarEvent } from "react-icons/bs";
import { LiaBedSolid } from 'react-icons/lia';
import CustomTextLOS from "../../components/CustomTextLOS";
import NavBar from "../../components/navbar";
import styles from "./styles";
import Card from "../../components/card";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <View style={styles.container}>
                <View style={styles.componentSearch}>
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
                </View>

                <Card />
                <Card />
                <Card />
            </View>
        </>
    )
}


