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
    text_sm: {
        marginTop: 15,
        color: "#544"
    }
});

export default styles;