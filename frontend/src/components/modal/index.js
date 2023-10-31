import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import CustomTextLOS from '../CustomTextLOS';
import styles from './styles';
import Dropdown from '../dropdown';

const App = () => {
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
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <CustomTextLOS style={styles.textStyle}>Hide Modal</CustomTextLOS>
                        </Pressable>
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

export default App;

