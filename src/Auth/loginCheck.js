
import { getUser, tempStorage } from "../db/AsyncConnection";

export default function loginCheck(state, cb) {

    const { logUsername, logPassword } = state;

    tempStorage(logUsername);
    tempStorage(logPassword);

    // check username and password
    getUser().then(data => {
        console.log(data);
    })

    // Check String patterns
    if (/\s/g.test(logUsername || logPassword)) {
        return { error: true, message: "Spaces are not allowed" }
    } else if (/^[1-9]/.test(logUsername)) {
        return {error: true, message: "Starting with numbers are not allowed"}
    } else if(/[\w\W]{1, 15}$/.test(logPassword)) {
        return {error: true, message: "Invalid password"}
    }

    return {error: false};
}