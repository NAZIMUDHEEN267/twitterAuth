
import userContext from "Context";


const loginUser = async function (data) {
    const { Username, Password } = data;
    const verifyData = JSON.parse(await AsyncStorage.getItem(Username));
    console.log("yeskjflas");

    if (verifyData && Password === verifyData.Password) {
        setAccess(true);
        return true;
    }

    return null;
}
