import LogoComp from "../logo";
import { View, TouchableOpacity } from "react-native";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineNotificationsNone, MdOutlineNotificationsActive } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import styles from './styles';
import MenuHamburguer from "../menuHamburger";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function NavBar(props) {

    var defaultBool = false;

    const [showMenu, setShowMenu] = useState(defaultBool);

    const notification = useSelector((state) => state.notifications.value);

    console.log("TTT:", notification);

    let notificationAtive = <MdOutlineNotificationsActive
        style={{
            fontSize: 30
        }} />;
    
    let notificationNone = <MdOutlineNotificationsNone
        style={{
            fontSize: 30
        }} />;

    return (
        <View style={styles.component}>
            <LogoComp />

            <TouchableOpacity>
                {notification ? notificationAtive : notificationNone}
            </TouchableOpacity>

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
                <MenuHamburguer bool={showMenu} />
             </TouchableOpacity>
        </View>
    );
}
