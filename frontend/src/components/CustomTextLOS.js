import { Text } from "react-native"

export default function CustomTextLOS({children, style}) {
    return(
        <Text style={{ fontFamily: 'LeagueSpartanRegular', ...style }}>
            {children}
        </Text>
    )
}