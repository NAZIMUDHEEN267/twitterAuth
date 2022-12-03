
import AsyncStorage from "@react-native-community/async-storage";
import userContext from "Context";

export default async function ({username, password}) {
    console.log(username, password);

    if(!username) {
        return {message: "Enter Username please..."}
    } else if (/\s/g.test(username)) {
        return {message: "Spaces are not allowed!"}
    } else {

        try {
           const verifyData = JSON.parse(await AsyncStorage.getItem(username));
           
           if(!verifyData) {
            return { message: "User not valid..."}
           } else if (verifyData.Username !== username) {
                return {message: "User not valid.."}
           } else if(verifyData.Password !== password) {
               return { message: "User not valid.." }
           } else {
                return null;
           }
           
        } catch (err) {
            console.log("kasjdflkjasdlfk");
        }
    }
}
