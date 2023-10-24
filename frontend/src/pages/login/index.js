import { TouchableOpacity } from "react-native";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";

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

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        padding: 10,

        width: '90vw'
    },
    componentLogin: {
        fontSize: '4rem',
        marginBottom: '2rem'
    },
    textLogin: {
        marginTop: '4rem',
        marginBottom: '4rem',

        fontSize: '4rem',
    },
    button: {
        width: '48vw',
        marginTop: '16rem',
    }
});