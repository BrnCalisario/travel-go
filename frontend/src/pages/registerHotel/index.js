import { useEffect, useState, useContext } from "react";
import { dataURItoBlob } from '../../config/utils';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { TextInput, View, Button, Image } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import { useCallback } from "react";
import styles from './styles';
import useCep from '../../hooks/useCep'
import AmenitiesDropDown from '../../components/AmenitiesDropDown'
import { AmenitiesContext } from "../../context/AmenitiesContext";

export default function registerHotel() {

    const [hotelName, setHotelName] = useState();
    const [hotelNumber, setHotelNumber] = useState();
    const [hotelImage, setHotelImage] = useState();

    const [hotelCep, setHotelCep] = useState();
    const { rua, cidade, estado, handleRequest } = useCep(hotelCep);
    const { hotelAmenities } = useContext(AmenitiesContext);


    const handleRegisterHotel = useCallback(async () => {

        const formData = new FormData();

        formData.append('Name', hotelName);
        formData.append('CEP', hotelCep);
        formData.append('State', estado);
        formData.append('City', cidade);
        formData.append('Number', hotelNumber);
        // formData.append("Image", dataURItoBlob(hotelImage.uri));
        formData.append("Amenities", hotelAmenities);

        try {
            const response = await axios.post("http://localhost:3030/api/adm/registerHotel", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
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

            <View>
                <AmenitiesDropDown />
            </View>

            <Button title="send" onPress={handleRegisterHotel} />
        </View>
    );
}