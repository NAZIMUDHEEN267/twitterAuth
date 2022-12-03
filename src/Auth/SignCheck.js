import AsyncStorage from "react-native";
import userContext from "Context";
import React from "react";

export default async function () {
    const getData = React.useContext(userContext);

    console.log(getData.sigObj);

//     await AsyncStorage.setItem(data.sigUsername, JSON.stringify(data));
//     const l = JSON.parse(await AsynStorage.getItem(JSON.stringify(data.sigUsername)));
//    console.log(l);
}