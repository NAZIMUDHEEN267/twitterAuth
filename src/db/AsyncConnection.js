import AsyncStorage from "@react-native-async-storage/async-storage";

const storePhone = (phone) => AsyncStorage.setItem("phone", JSON.stringify({ phone }));
const storeUsername = (username) => AsyncStorage.setItem("username", JSON.stringify({ username }));
const storeEmail = (email) => AsyncStorage.setItem("email", JSON.stringify({ email }));
const storePasswd = (passwd) => AsyncStorage.setItem("passwd", JSON.stringify({ passwd }));

const storeUser = () => {
    AsyncStorage.setItem("user", JSON.stringify({ name: "nazim", age: 1324 }))
        .catch(err => {
            console.log(err);
        })
}

const tempUsername = (username) => {
    AsyncStorage.setItem("tempUs", JSON.stringify({ username }))
        .catch(err => {
            console.log(err);
        })
}

const tempPassword = (password) => {
    AsyncStorage.setItem("tempPas", JSON.stringify({ password }))
        .catch(err => {
            console.log(err);
        })
}

const getUser = () => {
    return AsyncStorage.multiGet(["tempUs", "tempPas"]);
}

const visible = (value) => {
    AsyncStorage.setItem("visibility", JSON.stringify({ visible: value }))
        .catch(err => {
            console.log(err);
        })
}

const checkVisible = () => {
    return AsyncStorage.getItem("visibility");
}

export {
    storeUser,
    getUser,
    tempUsername,
    tempPassword,
    visible,
    checkVisible
};