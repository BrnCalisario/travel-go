import { TouchableOpacity } from "react-native";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";
import { useState } from 'react';
import styles from "./styles";
import { Crypto } from "crypto-js";
import axios from "axios";


export default function LoginPage(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [isInputEmpty, setIsInputyEmpty] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const handleLogin = (async () => {
        if (!email || !password) {
            setIsInputyEmpty(!isInputEmpty)
            return;
        }

        const loginData = {
            email: email,
            password: password
        };

        try {
            const res = await axios.post(process.env.REACT_APP_BACKEND_PORT + "/api/auth/", { loginData }); // TODO: verify the backend route's name 
            sessionStorage.setItem('token', res.data.token);
            setNotFound(false);
            props.navigation.navigate('home')

        } catch (error) {
            setNotFound(true);
        }
    });


    return (
        <View style={styles.screen}>
            <Text style={styles.textLogin}>Login</Text>

            <View style={styles.componentLogin}>
                <Text>Email/Name</Text>
                <TextInput
                    onchangeText={e => setemail(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentLogin}>
                <Text>Password</Text>
                <TextInput
                    onchangeText={e => setPassword(e)}
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Text>Don't you remember your password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <Button
                    onPress={() =>handleLogin()}
                    title="Sing in"
                    color="#006EE4" />

                <TouchableOpacity onPress={() => handleLogin()}>
                    <Text>Create account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

