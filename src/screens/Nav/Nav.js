import React, { useContext } from "react";
import Icon from "react-native-vector-icons/AntDesign"
import twitter from "Images/twitter.png";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import userContext from "Auth/context";

export default function Nav() {

    const context = useContext(userContext);

    return (
        <View style={styles.nav}>
           <TouchableOpacity onPress={context.open}>
             <Icon name="user" size={25}/>
           </TouchableOpacity>
           <Image source={twitter} style={styles.navIconSize}/>
           <TouchableOpacity>
            <Icon name="star" size={25}/>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        elevation: 10
    },
    navIconSize: {
        height: 25,
        width: 25
    }
})