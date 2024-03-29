import { StyleSheet } from "react-native";

export default StyleSheet.create({
    parent: {
        height: "100%",
        width: "100%"
    },
    scrollContainer: {
        backgroundColor: "white"
    },
    scroll_parent: {
        margin: 8
    },
    scroll_child: {
        borderWidth: 2,
        borderColor: "#0983ed",
        borderRadius: 55,
        width: 60,
        height: 60,
        padding: 2,
    },
    scrollItem_img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 60
    },
    scroll_text: {
        textAlign: "center",
        marginVertical: 3
    },
    footer: {
        position: "absolute",
        bottom: "0%"
    },
    loader: {
        margin: 10,
        alignItems: "center"
    }
})