import { StyleSheet } from "react-native";

export default StyleSheet.create({
    parent: {
        height: "100%",
        width: "100%"
    },
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
    },
    scrollContainer: {
        height: 60,
        backgroundColor: "blue"
    },
    scrollItem: {
        borderWidth: 2,
        borderColor: "#0983ed",
        borderRadius: 55,
        padding: 5,
        margin: 10
    },
    scrollItem_img: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    footer: {
        position: "absolute",
        bottom: "0%"
    }
})