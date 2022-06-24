let username = sentHttpRequest("getUser");
console.log(username);

function logUsername(user) {
    console.log(user);
}
sendHttpRequest("getUser");