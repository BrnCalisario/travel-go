import LogoComp from "../logo";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import styles from './styles';

export default function NavBar() {
    return (
        <View style={styles.component}>
            <LogoComp />
            <TouchableOpacity>
                <AiOutlineHeart
                    style={{
                        fontSize: 30
                    }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <AiOutlineUser
                    style={{
                        fontSize: 30
                    }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FiMenu
                    style={{
                        fontSize: 30
                    }} />
            </TouchableOpacity>
        </View>
    )
}
