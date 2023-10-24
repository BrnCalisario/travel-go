import { Text, TextInput, StyleSheet, View, Button, TouchableOpacity } from "react-native"

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
    componentRegister: {
        fontSize: '4rem',
        marginBottom: '2rem'
    },
    textRegister: {
        marginTop: '4rem',
        marginBottom: '4rem',

        fontSize: '4rem',
    },
    button: {
        width: '48vw',
        marginTop: '16rem',
    }
});