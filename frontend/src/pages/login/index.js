import { TouchableOpacity } from "react-native";
import { TextInput, StyleSheet, View, Button } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import { useState } from 'react';
import styles from "./styles";
import axios from "axios";


export default function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notFound, setNotFound] = useState(false);

    const handleLogin = (async () => {

        const loginData = {
            email: email,
            password: password
        };

        try {
            console.log(loginData);
            const res = await axios.post("http://localhost:3030/api/user/login/", loginData); // TODO: verify the backend route's name 
            if (!res.data.token) {
                setNotFound(true);
                return;
            }
            sessionStorage.setItem('token', res.data.token);
            setNotFound(false);
            props.navigation.navigate('home')
        } catch (error) {
            setNotFound(true);
        }
    });


    return (
        <View style={styles.screen}>
            <CustomTextLOS style={styles.textLogin}>Login</CustomTextLOS>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('registerHotel')}>
                    <CustomTextLOS>admin access</CustomTextLOS>
                </TouchableOpacity>
            </View>
            <View style={styles.componentLogin}>
                <CustomTextLOS>Email</CustomTextLOS>
                <TextInput
                    onChangeText={e => setEmail(e)}
                    style={styles.input}
                    value={email}
                />
            </View>

            <View style={styles.componentLogin}>
                <CustomTextLOS>Password</CustomTextLOS>
                <TextInput
                    onChangeText={e => setPassword(e)}
                    value={password}
                    style={styles.input}
                />
                {/* <TouchableOpacity>
                    <CustomTextLOS>Don't you remember your password?</CustomTextLOS>
                </TouchableOpacity> */}
            </View>

            {notFound ? <CustomTextLOS style={{color: 'red'}}>User Not Found</CustomTextLOS> : <></>}

            <View style={styles.button}>
                <Button
                    onPress={() => handleLogin()}
                    title="Sing in"
                    color="#006EE4" />

                <TouchableOpacity onPress={() => props.navigation.navigate('register')}>
                    <CustomTextLOS>Create account</CustomTextLOS>
                </TouchableOpacity>
            </View>
        </View>
    )
}

