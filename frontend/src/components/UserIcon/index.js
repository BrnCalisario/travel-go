import { TouchableOpacity } from "react-native";
import { AiOutlineUser } from "react-icons/ai";

export default function UserIcon( props ) {
    console.log('Navigation in UserIcon:', props.navigation);
    
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('account')}>
            <AiOutlineUser
                style={{
                    fontSize: 30
                }} />
        </TouchableOpacity>
    );
}