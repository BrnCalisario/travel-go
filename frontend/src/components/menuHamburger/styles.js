import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '15rem',
    },
    containerClosed: {
        display: "none"
    },
    button: {
        width: '100%',
        backgroundColor: 'red'
    },
    component: {
        zIndex: 2,
        backgroundColor:"red",
        height: "10vh"
    }
})

export default styles;