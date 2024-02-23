import { useEffect, useState, useContext } from "react";
import { dataURItoBlob } from '../../config/utils';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { TextInput, View, Button, Image, Text } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import { useCallback } from "react";
import styles from './styles';
import useCep from '../../hooks/useCep';
import AmenitiesDropDown from '../../components/AmenitiesDropDown';
import { useSelector } from "react-redux";
import Dropdown from "../../components/dropdown";

export default function registerHotel(props) {

    const [hotelName, setHotelName] = useState();
    const [hotelNumber, setHotelNumber] = useState();
    const [hotelImage, setHotelImage] = useState();

    const [hotelCep, setHotelCep] = useState();
    const { rua, cidade, estado, handleRequest } = useCep(hotelCep);
    const hotelAmenities = useSelector((state) => state.amenities.value);

    const [showRegisterPackage, setShow] = useState(false);

    const handleRegisterHotel = useCallback(async () => {
        const formData = {
            'hotelName': hotelName,
            'cep': hotelCep,
            'state': estado,
            'city': cidade,
            'number': hotelNumber,
            "amenities": hotelAmenities
        }
        try {
            const response = await axios.post("http://localhost:3030/api/hotel/create", formData);
            console.log(response);
            props.navigation.navigate('login')
        } catch (error) {
            console.log(error);
        }
    })

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setHotelImage(result.assets[0]);
        }

    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Button title="Pick an image from camera roll" onPress={pickImage} />

            {hotelImage && <Image source={{ uri: hotelImage.uri }} style={{ width: 200, height: 200 }} />} */}

            <View style={styles.componentRegister}>
                <CustomTextLOS>Name</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelName(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>CEP</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelCep(e)}
                    onBlur={() => handleRequest()}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>State</CustomTextLOS>
                <TextInput
                    value={estado}
                    editable={false}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>City</CustomTextLOS>
                <TextInput
                    value={cidade}
                    editable={false}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Number</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelNumber(e)}
                    style={styles.input}
                />
            </View>

            <View style={showRegisterPackage ? styles.buttonDisable : styles.buttonAble}>
                <Button title="Criar Pacote" onPress={() => setShow(!showRegisterPackage)} />
            </View>
            <View style={showRegisterPackage ? styles.containerPackageOpen : styles.containerPackageCLose}>
                <Button title="Cancelar" style={styles.componentRegister} onPress={() => setShow(!showRegisterPackage)} />

                <View style={styles.componentRegister}>
                    <CustomTextLOS>Data de embarque</CustomTextLOS>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.componentRegister}>
                    <CustomTextLOS>Data de desembarque</CustomTextLOS>
                    <TextInput
                        style={styles.input}
                    />

                    <View>
                        <Dropdown />
                    </View>

                    <Button title="Salvar Pacote" onPress={() => console.log("tsete")} />
                </View>
            </View>

            <View>
                <AmenitiesDropDown />
            </View>

            <Button title="send" onPress={handleRegisterHotel} />
        </View>
    );
}