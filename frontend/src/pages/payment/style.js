import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    main: {
        height: '100vh',
        color: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    buttonSection: {
        display: 'flex',
        gap: '40px',
        height: "35%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    paymentMethodButton: {
        width: '30%',
        justifyContent:'center',
        alignItems: 'center',
        color: 'white',
        padding: '6px',
        borderRadius: '10px',
        backgroundColor: 'rgb(9, 106, 58)'
    },
    payButton: {
        width: "70%",
        padding: '7px',
        color: 'white',
        backgroundColor: "rgb(9, 172, 58)",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px'
    },
    title: {
        fontSize: '40px',
        color: 'rgb(87, 222, 149)'
    },
    header: {
        height: "35%",
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
    },
    payButtonDisabled: {
        width: "70%",
        padding: '7px',
        color: 'white',
        backgroundColor: "rgb(9, 172, 58)",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '20%',
        borderRadius: '5px'
    }
})

export default styles;