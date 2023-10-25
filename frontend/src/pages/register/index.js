import { Text, TextInput, StyleSheet, View, Button, TouchableOpacity } from "react-native"
import styles from "./styles"

export default function RegisterPage(props) {
    return (
        <View style={styles.screen}>
            <Text style={styles.textRegister}>Register</Text>

            <View style={styles.componentRegister}>
                <Text>Email/Name</Text>
                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.componentRegister}>
                <Text>Confirmed the password</Text>
                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.button} >
                <Button
                    onPress={() => props.navigation.navigate('Login')}
                    title="Sing in"
                    color="#006EE4" />
            </View>
        </View>
    )
}