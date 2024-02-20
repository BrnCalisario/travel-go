import styles from "./styles";
import { View, Image, Button, Text, Touchable, TouchableOpacity } from "react-native";

export default function MenuHamburguer({ bool }) {
    if (bool) {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.component}>
                        <Text>aaaaa</Text>
                        <Button>
                            <Text>teste</Text>
                        </Button>
                    </View>
                </View>
            </>
        );
    } else {
        <>
            <View style={styles.containerClosed}>
                
            </View>
        </>
    }
}