import LogoComp from "../logo";
import { Text, View, TouchableOpacity } from "react-native";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import styles from './styles';
import CustomTextLOS from "../CustomTextLOS";

export default function NavBar(props) {
    return (
        <View style={styles.component}>
            <LogoComp />
            <TouchableOpacity>
                <AiOutlineHeart
                    style={{
                        fontSize: 30
                    }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('account')}>
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
    );
}
