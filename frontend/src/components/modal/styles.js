import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: '30px'
    },
    button: {
        borderRadius: 2,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#028000',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'normal',
        textAlign: 'center',
    },
    modalText: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        gap: '20px'
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: '48vw'
    },
    modalHeader: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    closeIcon: {
        color: 'red',
        fontSize: '20px'
    },
    buyButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        padding: '5px',
        borderRadius: '15px',
        backgroundColor: 'rgb(9, 172, 58)'
    },
    buyText: {
        color: 'white'
    }
});

export default styles;