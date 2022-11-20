import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    bg: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
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
    search: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        borderWidth: 2,
        borderColor: "#999",
        borderRadius: 22,
        marginBottom: 14,
        paddingLeft: 10,
        paddingRight: 15
    },
});

export default globalStyle;