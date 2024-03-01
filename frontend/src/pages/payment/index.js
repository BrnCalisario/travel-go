import { View, Button, Text } from "react-native";
import style from "./style";
import { FcMoneyTransfer } from "react-icons/fc";
import { TouchableOpacity } from "react-native-web";
import { useState } from "react";

export default function Payment(props) {

    const [pix, setPIX] = useState(false);
    const [boleto, setBoleto] = useState(false);

    const payPix = (() => {
        setBoleto(false);
        setPIX(true);
    })

    const payBoleto = (() => {
        setBoleto(true);
        setPIX(false);
    })

    return (
        <View style={style.main}>

            <View style={style.header}>
                <Text style={style.title}>Order Finished!</Text>
            </View>

            <View style={style.paymentMethod}>
                <FcMoneyTransfer style={style.paymentIcon} />
                <Text style={style.paymentMethodText}>Choose your payment method:</Text>
                {pix && <Text>PIX</Text>}
                {boleto && <Text>Bank payment slip</Text>}
            </View>

            <View style={style.buttonSection}>
                <TouchableOpacity style={style.paymentMethodButton} onPress={() => payBoleto()}><Text style={style.paymentButtonText}>Bank Payment</Text></TouchableOpacity>
                <TouchableOpacity style={style.paymentMethodButton} onPress={() => payPix()}><Text style={style.paymentButtonText}>PIX</Text></TouchableOpacity>
                <TouchableOpacity
                    disabled={!(pix || boleto)}
                    style={pix || boleto ? style.payButton : style.payButtonDisabled}
                    onPress={() => props.navigation.navigate('home')}>
                    <Text style={style.paymentButtonText}>Pay</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}