
import AsyncStorage from "@react-native-community/async-storage";
import userContext from "Context";

export default async function ({logUsername, logPassword}) {

    if(!logUsername) {
        return {message: "Enter Username please..."}
    } else if (/\s/.g.test(verifyData.key)) {
        return {message: "Spaces are not allowed!"}
    } else {

        try {
           const verifyData = JSON.parse(await AsyncStorage.getItem(logUsername));
           
           if(!verifyData) {
            return { message: "User not valid..."}
           } else if (verifyData.Username !== logUsername) {
                return {message: "User not valid.."}
           } else if(verifyData.Password !== logPassword) {
               return { message: "User not valid.." }
           } else {
                return null;
           }
        } catch (err) {
            console.log(err);
        }
    }
}
