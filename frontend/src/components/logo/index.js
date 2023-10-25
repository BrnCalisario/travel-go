import { Text, View, StyleSheet } from "react-native";
import { FaCircle } from 'react-icons/fa';
import styles from './styles';

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

