import { useState } from "react"
import { TextInput, StyleSheet, View, Button, TouchableOpacity } from "react-native"
import CustomTextLOS from "../../components/CustomTextLOS";
import styles from "./styles"
import axios from 'axios';

export default function RegisterPage(props) {

    const [email, setEmail] = useState();
    const [fullName, setFullName] = useState();
    const [password, setPassword] = useState();
    const [CPF, setCPF] = useState();

    const handleRegister = (async () => {
        if (!email || !fullName || !password || !CPF) 
            return;

        const registerData = {
            fullName: fullName,
            password: password,
            cpf: CPF,
            email: email
        }

        try {
            const res = await axios.post("http://localhost:3030/api/user/signup/", registerData);
            props.navigation.navigate('login')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    })

    return (
        <View style={styles.screen}>
            <CustomTextLOS style={styles.textRegister}>Register</CustomTextLOS>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Email</CustomTextLOS>
                <TextInput
                    onChangeText={e => setEmail(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Full Name</CustomTextLOS>
                <TextInput
                    onChangeText={e => setFullName(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>CPF</CustomTextLOS>
                <TextInput
                    onChangeText={e => setCPF(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <CustomTextLOS>Password</CustomTextLOS>
                <TextInput
                    onChangeText={e => setPassword(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.button} >
                <Button
                    onPress={() => handleRegister()}
                    title="Sing in"
                    color="#006EE4" />
            </View>
        </View>
    )
}