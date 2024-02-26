import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        height: '100vh',
        color: 'gray',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    buttonSection: {
        display: 'flex',
        // flexDirection: 'row',
        gap: '40px',
        height: "30%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    payButton: {
        width: '30%',
        justifyContent:'center',
        alignItems: 'center',
        color: 'white',
        padding: '6px',
        borderRadius: '10px',
        backgroundColor: 'rgb(9, 106, 58)'
    },
    title: {
        fontSize: '40px',
        color: 'rgb(87, 222, 149)'
    },
    header: {
        height: "40%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    paymentMethod: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        height: "30%",
        gap: "30px"
    },
    paymentIcon: {
        fontSize: '200px'
    },
    paymentMethodText: {
        fontSize: '18px'
    }


})

export default styles;