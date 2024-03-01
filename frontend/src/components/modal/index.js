import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import CustomTextLOS from '../CustomTextLOS';
import styles from './styles';
import { TouchableOpacity } from "react-native";
import { IoMdClose } from "react-icons/io";

export default function ModalComp(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={styles.modalHeader}>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <IoMdClose style={styles.closeIcon} />
                            </Pressable>
                        </View>

                        <CustomTextLOS style={styles.modalText}>
                            <View>
                                <CustomTextLOS>Check-in</CustomTextLOS>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <CustomTextLOS>Check-out</CustomTextLOS>
                                <TextInput
                                    style={styles.input}
                                />
                            </View>
                        </CustomTextLOS>

                        <TouchableOpacity
                            style={styles.buyButton}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                props.navigation.navigate('payment')
                            }
                            }>
                            <Text style={styles.buyText}>
                                Buy
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <CustomTextLOS style={styles.textStyle}>See Offer</CustomTextLOS>
            </Pressable>
        </View>
    );
};
