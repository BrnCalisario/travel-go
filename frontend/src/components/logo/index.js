import { Text, View, StyleSheet } from "react-native";
import { FaCircle } from 'react-icons/fa';
import CustomTextLOS from "../CustomTextLOS";

import styles from './styles';

export default function LogoComp() {
    return (
        <View style={styles.component}>
            <View style={styles.logo}>
                <CustomTextLOS style={styles.firstSyllable}>
                    Tra
                </CustomTextLOS>
                <CustomTextLOS style={styles.secondSyllable}>
                    vel
                </CustomTextLOS>
                <CustomTextLOS style={styles.thirdSyllable}>
                    go
                </CustomTextLOS>
            </View>
            <View style={styles.threeLittleBalls}>
                <FaCircle style={styles.firstBall} />
                <FaCircle style={styles.secondBall} />
                <FaCircle style={styles.thirdBall} />
            </View>
        </View>
    )
}

