import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nav: {
        position: "absolute",
        elevation: 10,
        top: 0,
        left: 0,
        width: "100%",
        padding: 10
    },
    nav_img: {
        height: 30,
        width: 30,
        zIndex: -1,
        alignSelf: "center"
    },
    headline: {
        fontSize: 20,
        fontWeight: "600",
        color: "#222",
        fontFamily: "Rubik-BoldItalic"
    },
    icon: {
        position: "absolute",
        left: 15,
        top: 10
    },
    code: {
        flex: .3,
        height: "90%",
        justifyContent: "center",
    }
});