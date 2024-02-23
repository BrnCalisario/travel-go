import { View, Button, Text } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import style from "./style";

export default function Payment(props) {




    return (
        <View style={style.main}>

            <Text>Payment</Text>

            <View style={style.buttonSection}>
                <Button title="PIX">PIX</Button>
                <Button title="Boleto">Boleto</Button>
            </View>

        </View>
    )
}