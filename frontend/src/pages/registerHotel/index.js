import { useState } from "react/cjs/react.development";
import { dataURItoBlob } from '../../config/utils';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";
import CustomTextLOS from "../../components/CustomTextLOS";


export default function registerHotel() {

    const [hotelName, setHotelName] = useState();
    const [hotelLocation, setHotelLocation] = useState();
    const [hotelPrice, setHotelPrice] = useState();
    const [hotelScore, setHotelScore] = useState();
    const [hotelAvaliations, setHotelAvaliations] = useState();
    const [hotelCompany, setHotelCompany] = useState();
    const [hotelIncludes, setHotelIncludes] = useState();
    const [hotelLowestPrice, setHotelLowestPrice] = useState();
    const [hotelImage, setHotelImage] = useState();



    const handleRegisterHotel = (async () => {

        const formData = new FormData();

        formData.append('Name', hotelName);
        formData.append('Location', hotelLocation);
        formData.append('Price', hotelPrice);
        formData.append("Score", hotelScore);
        formData.append("Avaliations", hotelAvaliations);
        formData.append("Company", hotelCompany);
        formData.append("Includes", hotelIncludes);
        formData.append("LowestPrice", hotelLowestPrice);
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

            <View style={styles.componentRegister}>
                <CustomTextLOS>Name</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelName(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Location</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelLocation(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Price</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelPrice(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Score</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelScore(e)}
                    style={styles.input}
                />
            </View>
            <View style={styles.componentRegister}>
                <CustomTextLOS>Avaliations</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelAvaliations(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Company</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelCompany(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>LowestPrice</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelLowestPrice(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Includes</CustomTextLOS>
                <TextInput
                    onChangeText={e => setHotelIncludes(e)}
                    style={styles.input}
                />
            </View>

            {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
            <Button title="send" onPress={handleRegisterHotel} />
        </View>
    );
}