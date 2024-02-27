import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginTop: '2rem',
        alignItems: 'center',
        width: 400,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    stars: {
        color: '#F29F05',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "flex-start",
        width: '95%'
    },
    greenCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e9f4de',
        borderWidth: 1,
        borderColor: '#cce5b2',
        width: '96%',
        alignItems: 'center',
        padding: 18
    },
    heart: {
        alignItems: "flex-end",
        color: "black",
        width: "70%",
    },
});

export default styles;