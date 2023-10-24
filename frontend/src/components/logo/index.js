import { Text, View, StyleSheet } from "react-native"

import { FaCircle } from 'react-icons/fa';

export default function LogoComp() {
    return (
        <View style={styles.component}>
            <View style={styles.logo}>
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
            <View style={styles.threeLittleBalls}>
                <FaCircle style={styles.firstBall} />
                <FaCircle style={styles.secondBall} />
                <FaCircle style={styles.thirdBall} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        alignItems: 'center',
        height: '5rem'
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        height: '2rem'
    },
    firstSyllable: {
        color: '#1971c2',
        fontSize: '2rem'
    },
    secondSyllable: {
        color: '#f08c00',
        fontSize: '2rem'
    },
    thirdSyllable: {
        color: '#e03131',
        fontSize: '2rem'
    },

    threeLittleBalls: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: "space-around",
    },

    firstBall: {
        fontSize: '80%',
        color: '#1971c2',
    },
    secondBall: {
        fontSize: '80%',
        color: '#f08c00'
    },
    thirdBall: {
        fontSize: '80%',
        color: '#e03131'
    },
});