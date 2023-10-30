import { useState } from "react";
import { dataURItoBlob } from '../../config/utils';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { TextInput, View, Button, Image } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import { useCallback } from "react";
import styles from './styles';
import useCep from '../../hooks/useCep'


export default function registerHotel() {

    const [hotelName, setHotelName] = useState();
    const [hotelNumber, setHotelNumber] = useState();
    const [hotelImage, setHotelImage] = useState();

    const [hotelCep, setHotelCep] = useState();
    const { rua, cidade, estado, handleRequest } = useCep(hotelCep);


    const handleRegisterHotel = useCallback(async () => {

        const formData = new FormData();

        formData.append('Name', hotelName);
        formData.append('CEP', hotelCep);
        formData.append('State', estado);
        formData.append('City', cidade);
        formData.append("Image", dataURItoBlob(hotelImage.uri));

        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_PORT + "/api/adm/registerHotel", formData, {
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
            <Button title="Pick an image from camera roll" onPress={pickImage} />

            {hotelImage && <Image source={{ uri: hotelImage.uri }} style={{ width: 200, height: 200 }} />}

<<<<<<< HEAD

=======
>>>>>>> 9dc7a48d0a9321aa7224b90399342b35d81b73d1
            <View style={styles.componentRegister}>
                <CustomTextLOS>Name</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelName(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
<<<<<<< HEAD
                <CustomTextLOS>LowestPrice</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelLowestPrice(e)}
=======
                <CustomTextLOS>CEP</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelCep(e)}
                    onBlur={() => handleRequest()}
>>>>>>> 9dc7a48d0a9321aa7224b90399342b35d81b73d1
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
<<<<<<< HEAD
                <CustomTextLOS>Includes</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelIncludes(e)}
=======
                <CustomTextLOS>City</CustomTextLOS>
                <TextInput
                    value={cidade}
                    editable={false}
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
                <CustomTextLOS>Number</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelNumber(e)}
>>>>>>> 9dc7a48d0a9321aa7224b90399342b35d81b73d1
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>CEP</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelIncludes(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Amenity</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelIncludes(e)}
                    style={styles.input}
                />
            </View>

            <Button title="send" onPress={handleRegisterHotel} />
        </View>
    );
}