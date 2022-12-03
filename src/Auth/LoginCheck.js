
import AsyncStorage from "@react-native-community/async-storage";
import userContext from "Context";
import React from "react";
import { View } from "react-native";
import Home from "Screens/Home/Home";

export default function LoginCheck (props) {

    // const getContext = React.useContext(userContext);
    // console.log(getContext.logObj);
    // const { username, password } = getContext.logObj;

    // if(!username) {
    //     return {message: "Enter Username please..."}
    // } else if (/\s/g.test(username)) {
    //     return {message: "Spaces are not allowed!"}
    // } else {

    //     try {
    //        const verifyData = JSON.parse(await AsyncStorage.getItem(username));
           
    //        if(!verifyData) {
    //         return { message: "User not valid..."}
    //        } else if (verifyData.Username !== username) {
    //             return {message: "User not valid.."}
    //        } else if(verifyData.Password !== password) {
    //            return { message: "User not valid.." }
    //        } else {
    //             return null;
    //        }

    //     } catch (err) {
    //         console.log("kasjdflkjasdlfk");
    //     }
    // }
    console.log(props.route.params);
   return (
    <View>
        <Home />
    </View>
   )
}
