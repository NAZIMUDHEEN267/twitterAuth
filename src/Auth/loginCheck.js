import { getUser, visible } from "../db/AsyncConnection";

export default function loginCheck(state, cb) {

    const {logUsername, logPassword} = state;

    // check username and password
    getUser().then(data => {
        const username = JSON.parse(data[0][1]).username;
        const passwd = JSON.parse(data[1][1]).password;

        if(username === "use" && passwd === "user12") {
            cb(true);
            visible(true);
        }
    })

    // Check String patterns
    if (/\s/g.test(logUsername || logPassword)) {
        return { error: true, message: "Spaces are not allowed" }
    } else if (/^[1-9]/.test(logUsername)) {
        return { error: true, message: "Starting with numbers are not allowed" }
    }

    return { error: false };
}