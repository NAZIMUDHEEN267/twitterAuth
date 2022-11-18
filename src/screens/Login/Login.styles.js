import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bg: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        height: 45,
        width: 45,
        elevation: 40,
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
    input: {
        width: "100%",
        padding: 16,
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 22,
        borderWidth: 2,
        borderColor: "transparent"
    },
    mb: {
        marginBottom: 14,
    },
    btn_cta: {
        width: "80%"
    },
    btn_text: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 15,
        color: "#0983ed"
    },
    text_sm: {
        marginTop: 15,
        color: "#544"
    }
});

export default styles;