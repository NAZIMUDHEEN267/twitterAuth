export default function signCheck(state, cb) {
    const { sigMobile, sigPassword, sigEmail, sigUsername } = state;

    if(!/^[1-9]$/.test(sigMobile)) {
        return {error: true, message: "Enter only numbers.."}
    } else if(!/[^0-9a-z]$/i.test(sigUsername)) {
        return {error: true, message: "Only use alpha numeric characters"}
    } else if(!/@/.test(sigEmail)) {
        return({error: true, message: "Email not valid"});
    }

    return {error: false};
}