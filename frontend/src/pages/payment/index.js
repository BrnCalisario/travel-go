import { View, Button, Text } from "react-native";
import style from "./style";
import { FcMoneyTransfer } from "react-icons/fc";
import { TouchableOpacity } from "react-native-web";

export default function Payment(props) {


    return (
        <View style={style.main}>

            <View style={style.header}>
                <Text style={style.title}>Pedido Finalizado!</Text>
            </View>

            <View style={style.paymentMethod}>
                <FcMoneyTransfer style={style.paymentIcon}/>
                <Text style={style.paymentMethodText}>Escolha sua forma de pagamento:</Text>
            </View>


            <View style={style.buttonSection}>
                <TouchableOpacity style={style.payButton} title="Boleto">Boleto</TouchableOpacity>
                <TouchableOpacity style={style.payButton} title="PIX">PIX</TouchableOpacity>
            </View>

        </View>
    )
}