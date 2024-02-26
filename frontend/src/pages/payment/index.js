import { View, Button, Text } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import style from "./style";
import { FcMoneyTransfer } from "react-icons/fc";
import { TouchableOpacity } from "react-native-web";
import { useState } from "react";

export default function Payment(props) {

    const [pix, setPIX] = useState(false);
    const [boleto, setBoleto] = useState(false);
    const [pay, setPay] = useState(false);

    const payPix = (() => {
        setBoleto(false);
        setPIX(true);
        setPay(true);
    })

    const payBoleto = (() => {
        setBoleto(true);
        setPIX(false);
        setPay(true);
    })



    return (
        <View style={style.main}>

            <View style={style.header}>
                <Text style={style.title}>Pedido Finalizado!</Text>
            </View>

            <View style={style.paymentMethod}>
                <FcMoneyTransfer style={style.paymentIcon} />
                <Text style={style.paymentMethodText}>Escolha sua forma de pagamento:</Text>
                {pix && <Text>PIX</Text>}
                {boleto && <Text>Boleto</Text>}
            </View>

            <View style={style.buttonSection}>
                <TouchableOpacity style={style.paymentMethodButton} onPress={() => payBoleto()}><Text style={style.paymentButtonText}>Boleto</Text></TouchableOpacity>
                <TouchableOpacity style={style.paymentMethodButton} onPress={() => payPix()}><Text style={style.paymentButtonText}>PIX</Text></TouchableOpacity>
                <TouchableOpacity 
                    disabled={!(pix || boleto)} 
                    style={pix || boleto ? style.payButton : style.payButtonDisabled}
                    onPress={() => props.navigation.navigate('home')}><Text style={style.paymentButtonText}>Pagar</Text></TouchableOpacity>
            </View>

        </View>
    )
}