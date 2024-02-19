export const checkLoginStatus = () => {
    if(localStorage.getItem("authtoken")) {
        return true
    }

    return false
}