import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { BiSearch } from 'react-icons/bi';
import { BsCalendarEvent } from "react-icons/bs";
import { LiaBedSolid } from 'react-icons/lia';
import LogoComp from "../../components/logo";
import NavBar from "../../components/navbar";
import styles from "./styles";
import Card from "../../components/card";

export default function HomePage() {
    return (
        <View style={styles.container}>
            <NavBar />
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
                            <Text>
                                To
                            </Text>
                            <TextInput
                                placeholder="Brazil"
                            />
                        </View>
                    </View>
                    <View style={styles.componentOptions}>
                        < BsCalendarEvent style={{
                            fontSize: 20,
                            color: 'gray'
                        }} />
                        <View>
                            <Text>
                                In/Out
                            </Text>
                            <TextInput
                                placeholder="Select date"
                            />
                        </View>
                        <LiaBedSolid style={{
                            fontSize: 30,
                            color: 'gray'
                        }} />
                        <View>
                            <Text>
                                Guest and rooms
                            </Text>
                            <TextInput
                                placeholder="3 guests, 1 room"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.componentFilter}>
                    <TouchableOpacity>
                        <Text>
                            Order
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Filter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Card />
        </View>
    )
}


