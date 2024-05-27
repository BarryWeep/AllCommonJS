   // Function to set a cookie with a specified name, value, and expiration time
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

$(document).ready(function() {
    // Initialize the form with previously saved credentials, if available


    const username = getCookie("username");
    const password = getCookie("password");
    const Department = getCookie("department");

    if (username !== "" && password !== "" && Department !="") {
        // If cookies are found, fill in the username and password fields
        $("#SignInUserEmailName").val(username);
        $("#SignInPassword").val(password);
        $("#SignInDepartment").val(Department);
        // Also check the "Remember Me" checkbox
        $("#SignInRememberMe").prop("checked", true);
    }

});