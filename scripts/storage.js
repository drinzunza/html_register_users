

function saveUser(user) {
    let existing = getAllUsers();
    existing.push(user); // add new user to the list

    // JSON = JavaScript Object Notation
    let value = JSON.stringify(existing); // <- parse the object into a json string

    // localstorage only stores: string, numbers
    localStorage.setItem("users", value);
}

function getAllUsers() {
    let allUsers = [];

    let string = localStorage.getItem("users"); // read the json string
    if(string) {
        // parse the string into an array
        allUsers = JSON.parse(string);
        return allUsers;
    }
    else {
        return [];
    }
}