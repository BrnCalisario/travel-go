import { Text, View, StyleSheet, TextInput } from "react-native";
import LogoComp from "../../components/logo";
import NavBar from "../../components/navbar";

export default function HomePage() {
    return (
        <View>
            <NavBar />
            <View style={styles.componentSearch}>
                <View style={styles.search}>
                    <View>
                        
                    </View>
                    <View>
                        <Text>
                            To
                        </Text>
                        <TextInput
                            placeholder="Brazil"
                        />
                    </View>
                </View>
                <View style={styles.componentFilter}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        display: 'flex',
        flexDirection: 'row',

        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1
    },
});
