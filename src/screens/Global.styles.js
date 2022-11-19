import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    bg: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    text_lg: {
        fontSize: 23,
        fontFamily: "MarkoOne-Regular",
        color: "#fff",
        marginTop: 15
    },
    parent: {
        width: "80%",
        alignItems: "center"
    },
    inputContainer: {
        width: "100%",
        marginTop: 15,
        marginBottom: 15,
        // backgroundColor: "yellow"
    },
});

export default globalStyle;