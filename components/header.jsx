import { Avatar, Stack } from "@rneui/themed";
import { View } from "react-native";

export default function Header () {
    return (
        <View style={{flexDirection: "row", width: 100, height: 80, padding: 10, paddingTop: 5, marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 20}}>
            <Avatar source={ require('../assets/img/chambeador.jpeg')} size={90} rounded avatarStyle={{margin: 5}}/>
            <Avatar source={ require('../assets/img/gojo-rojo.jpeg')} size={90} rounded avatarStyle={{margin: 5}}/>
            <Avatar source={ require('../assets/img/mahoraga-megumi.jpeg')} size={90} rounded avatarStyle={{margin: 5}}/>
            <Avatar source={ require('../assets/img/YutaOkkotsu.jpg')} size={90} rounded avatarStyle={{margin: 5}}/>
        </View>
    )
}