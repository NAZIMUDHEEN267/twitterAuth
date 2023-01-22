import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUsername = AsyncStorage.setItem("user")

const storeUser = () => {
    AsyncStorage.setItem("user", JSON.stringify({ name: "nazim", age: 1324 }))
        .catch(err => {
            console.log(err);
        })
}

const tempUsername = (username) => {
    AsyncStorage.setItem("tempUs", JSON.stringify({username}))
    .catch(err => {
        console.log(err);
    })
}

const tempPassword = (password) => {
    AsyncStorage.setItem("tempPas", JSON.stringify({password}))
    .catch(err => {
        console.log(err);
    })
}

const getUser = () => {
    return AsyncStorage.multiGet(["tempUs", "tempPas"]);
}

const visible = (value) => {
    AsyncStorage.setItem("visibility", JSON.stringify({visible: value}))
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