
import { Text, View, StyleSheet } from "react-native";
import React, { useState, useCallback, useEffect, useContext } from "react";
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "./styles";
import axios from 'axios';
import { setAmenities } from '../../store/AmenitiesSlice';
import { useSelector, useDispatch } from 'react-redux'

export default function AmenitiesDropDown() {
    const [selected, setSelected] = useState([]);
    
    const hotelAmenities = useSelector((state) => state.amenities.value);

    const dispatch = useDispatch();

    useEffect(() => {
        handleGetAmenities();
    }, []);

    const handleGetAmenities = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3030/api/hotel/amenities");

            dispatch(setAmenities(response.data.map((item) => {
                return { label: item.amenity, value: item.id }
            })))

        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View style={styles.container}>
            <Text>Amenities</Text>
            <MultiSelect
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={40}
                    />
                )}
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={hotelAmenities}
                labelField="label"
                valueField="value"
                placeholder="Select the amenities"
                value={selected}
                onChange={item => {
                    setSelected(item);
                }}
                selectedStyle={styles.selectedStyle}
            />
        </View>
    );
};
