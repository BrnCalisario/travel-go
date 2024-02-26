import { View, TextInput, Button } from "react-native";
import NavBar from "../../components/header";
import CustomTextLOS from "../../components/CustomTextLOS";
import styles from "./styles";

export default function AccountPage() {
    return (
        <>
            <NavBar />
            <View style={styles.screen}>
                <View style={styles.componentLogin}>
                    <CustomTextLOS>Email</CustomTextLOS>
                    <TextInput
                        onchangeText={e => setEmail(e)}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.screen}>
                <View style={styles.componentLogin}>
                    <CustomTextLOS>Name</CustomTextLOS>
                    <TextInput
                        onchangeText={e => setEmail(e)}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.screen}>
                <View style={styles.componentLogin}>
                    <CustomTextLOS>CPF</CustomTextLOS>
                    <TextInput
                        onchangeText={e => setEmail(e)}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.screen}>
                <View style={styles.componentLogin}>
                    <CustomTextLOS>Password</CustomTextLOS>
                    <TextInput
                        onchangeText={e => setEmail(e)}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title="Update"
                    color="#006EE4" />
            </View>
        </>
    );
}