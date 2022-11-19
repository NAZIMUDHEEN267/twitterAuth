import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nav: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "100%",
        padding: 10,
    },
    nav_img: {
        height: 30,
        width: 30,
        alignSelf: "center"
    },
    headline: {
        fontSize: 20,
        fontWeight: "600",
        color: "#222"
    },
    icon: {
        position: "absolute",
        left: 15,
        top: 10
    },
    mobile: {
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
    code: {
        flex: .2,
        height: "90%",
        justifyContent: "center",
    }
});