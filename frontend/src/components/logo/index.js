import { Text, View, StyleSheet } from "react-native"

export default function LogoComp() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.firstSyllable}>
                    Tra
                </Text>
                <Text style={styles.secondSyllable}>
                    vel
                </Text>
                <Text style={styles.thirdSyllable}>
                    go
                </Text>
            </View>

            Logo
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    firstSyllable: {
        color: '#1971c2',
        fontSize: '4rem'
    },
    secondSyllable: {
        color: '#f08c00',
        fontSize: '4rem'
    },
    thirdSyllable: {
        color: '#e03131',
        fontSize: '4rem'
    }
});