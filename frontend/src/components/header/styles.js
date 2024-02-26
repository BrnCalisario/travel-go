import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    component: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 62,
        zIndex: 1,

        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1
    },
    componentNotificationHeader: {
        backgroundColor: "white",
        position: "absolute",
        top: 65,
        width: "20rem",
        height: "10rem",
        padding: "0.7rem",
        borderRadius: "10px",
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    NotificationTitle: {
        fontSize: 16,
        marginBottom: "0.7rem"
    },
    NotificationBody: {
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
    },
    componentNotificationHeaderClosed: {
        display: "none"
    }
});

export default styles;