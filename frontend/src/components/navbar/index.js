import LogoComp from "../logo";
import { StyleSheet, View } from "react-native";
import { BsBookmarkHeart } from 'react-icons/bs';

export default function NavBar() {
    return (
        <View style={styles.component}>
            <LogoComp />
            <BsBookmarkHeart />
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