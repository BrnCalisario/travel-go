import LogoComp from "../logo";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { BsBookmarkHeart } from 'react-icons/bs';
import styles from './styles';

export default function NavBar() {
    return (
        <View style={styles.component}>
            <LogoComp />
            <TouchableOpacity>
                <BsBookmarkHeart />
            </TouchableOpacity>

        </View>
    )
}
