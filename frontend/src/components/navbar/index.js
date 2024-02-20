import LogoComp from "../logo";
import { Text, View, TouchableOpacity } from "react-native";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import styles from './styles';
import CustomTextLOS from "../CustomTextLOS";
import MenuHamburguer from "../menuHamburger";
import { useState } from "react";

export default function NavBar(props) {
    var bool = false;

    const [showMenu, setShowMenu] = useState(bool);

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
            <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
                <FiMenu
                    style={{
                        fontSize: 30
                    }} />
                <MenuHamburguer bool={showMenu}/>
            </TouchableOpacity>
        </View>
    );
}
