let username = sentHttpRequest("getUser");//normall how we write code
console.log(username);//normally how we write code

function logUsername(user) {
    console.log(user);
}
sendHttpRequest("getUser", logUsername);//this is not us invoking the function, this is the callback that passes through the function and will call upon/invoke function for us.

sendHttpRequest("getUser", user => console.log(user));