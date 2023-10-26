import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    componentSearch: {
        width: 400,
        marginTop: '2rem',
    },
    component: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10,
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        padding: 8
    },
    componentOptions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    componentFilter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,

        marginTop: '1rem',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
});

export default styles;