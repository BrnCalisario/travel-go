import { TouchableOpacity } from "react-native";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";
import styles from "./styles";

export default function LoginPage(props) {
    return (
        <View style={styles.screen}>
            <Text style={styles.textLogin}>Login</Text>

            <View style={styles.componentLogin}>
                <Text>Email/Name</Text>
                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.componentLogin}>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <Button
                    onPress={() => props.navigation.navigate('Home')}
                    title="Sing in"
                    color="#006EE4" />

                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                    <Text>Create account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

