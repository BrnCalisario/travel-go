
import { Text, View, StyleSheet } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AmenitiesDropDown() {
    const [selected, setSelected] = useState([]);
    const [hotelAmenities, setHotelAmenities] = useState([]);

    useEffect(() => {
        handleGetAmenities;
    }, []);

    const handleGetAmenities = useCallback(async () => {
        try {
            const response = await axios.get(REACT_APP_BACKEND_PORT + "/api/hotels/amenities");
            setHotelAmenities([...hotelAmenities, response.data]);
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View style={styles.container}>
            <Text>Amenities</Text>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={hotelAmenities}
                labelField="label"
                valueField="value"
                placeholder="Select"
                value={selected}
                onChange={item => {
                    setSelected(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
                selectedStyle={styles.selectedStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
        height: 50,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        borderRadius: 12,
    },
});
