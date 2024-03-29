import LogoComp from "../logo";
import { View, TouchableOpacity, Text } from "react-native";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineNotificationsNone, MdOutlineNotificationsActive } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import styles from './styles';
import MenuHamburguer from "../menuHamburger";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client';
import { useEffect } from "react";
import { toggleValue } from "../../store/NotificationsSlice";
import UserIcon from "../userIcon";

export default function Header({ navigation }) {

    const [use, setUse] = useState(false)

    var defaultBool = false;
    const [showMenu, setShowMenu] = useState(defaultBool);
    const notification = useSelector((state) => state.notifications.value);
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();

    // const socket = io("http://localhost:3030"); // put notification's route

    // useEffect(() => {
    //     socket.on('Notification', (data) => {
    //         dispatch(() => toggleValue());
    //     });

    //     return () => {
    //         socket.off("OFF")
    //     }
    // }, [notification])

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

            <LogoComp navigation={navigation}/>

            <TouchableOpacity onPress={() => setActive(!isActive)}>
                {notification ? notificationAtive : notificationNone}
            </TouchableOpacity>

            <TouchableOpacity>
                <AiOutlineHeart
                    style={{
                        fontSize: 30
                    }} />
            </TouchableOpacity>

            <UserIcon navigation={navigation}/>

            <View style={isActive ? styles.componentNotificationHeader : styles.componentNotificationHeaderClosed}>
                <Text style={styles.NotificationTitle}>
                    Notification
                </Text>
                <Text style={styles.NotificationBody}>

                </Text>
            </View>
        </View>
    );
}
