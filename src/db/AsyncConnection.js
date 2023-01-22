import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUser = () => {
    AsyncStorage.setItem("user", JSON.stringify({ name: "nazim", age: 1324 }))
        .catch(err => {
            console.log(err);
        })
}

const tempStorage = (username) => {
    AsyncStorage.setItem("temp", JSON.stringify({username}))
    .catch(err => {
        console.log(err);
    })
}

const getUser = () => {
    return AsyncStorage.getItem("temp");
}

export { storeUser, getUser, tempStorage };