import styles from "./styles";


const amenitiesDropDown = () => {
    const [selected, setSelected] = useState([]);
    const [hotelAmenities, setHotelAmenities] = useState([]);


    useEffect = (() => {
        handleGetAmenities();
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
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                search
                data={hotelAmenities}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
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

export default amenitiesDropDown;