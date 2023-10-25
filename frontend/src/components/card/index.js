import styles from "./styles";
import { View, Image } from "react-native";

export default function CardComp() {
    return (
        <>
            <View style={styles.card}>
                <Image
                    style={{
                        height: 130,
                        width: 400
                    }}
                    source={require("/assets/viagem.png")}
                />
            </View>
        </>
    )
}