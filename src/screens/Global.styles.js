import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    bg: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    parent: {
        width: "80%",
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        marginTop: 15,
        marginBottom: 15,
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
        paddingRight: 15,
        backgroundColor: "#fff"
    },
    text_container: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 6
    },
    user_profile: {
        flex: .15,
        marginRight: 10
    },
    user_img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    user_content: {
        flex: .83,
        padding: 2
    },
    user_detail: {
        flexDirection: "row"
    },
    username: {
        fontWeight: "600",
        marginRight: 5,
        color: "#333"
    },
    post_date: {
        color: "#888",
        fontSize: 12,
        marginLeft: 5
    },
    post_description: {
        lineHeight: 19,
        color: "#666",
        fontFamily: "Poppins-Bold"
    }
});

export default globalStyle;