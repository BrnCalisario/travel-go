import { View, TextInput, Button } from "react-native";
import Header from "../../components/header";
import CustomTextLOS from "../../components/CustomTextLOS";
import styles from "./styles";

export default function AccountPage({navigation}) {
    return (
        <>
            <Header navigation={navigation}/>
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