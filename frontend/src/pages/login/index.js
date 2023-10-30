import { TouchableOpacity } from "react-native";
import { TextInput, StyleSheet, View, Button } from "react-native";
import CustomTextLOS from "../../components/CustomTextLOS";
import { useState } from 'react';
import styles from "./styles";
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
            <CustomTextLOS style={styles.textLogin}>Login</CustomTextLOS>

            <View style={styles.componentLogin}>
                <CustomTextLOS>Email/Name</CustomTextLOS>
                <TextInput
                    onchangeText={e => setEmail(e)}
                    style={styles.input}
                />
            </View>

            <View style={styles.componentLogin}>
                <CustomTextLOS>Password</CustomTextLOS>
                <TextInput
                    onchangeText={e => setPassword(e)}
                    style={styles.input}
                />
                <TouchableOpacity>
                    <CustomTextLOS>Don't you remember your password?</CustomTextLOS>
                </TouchableOpacity>
            </View>

            {isInputEmpty ? <Text>Empty input(s)</Text> : <></>}

            <View style={styles.button}>
                <Button
                    onPress={() => handleLogin()}
                    title="Sing in"
                    color="#006EE4" />

                {notFound ? <Text>User Not Found</Text> : <></>}

                <TouchableOpacity onPress={() => handleLogin()}>
                    <CustomTextLOS>Create account</CustomTextLOS>
                </TouchableOpacity>
            </View>
        </View>
    )
}

