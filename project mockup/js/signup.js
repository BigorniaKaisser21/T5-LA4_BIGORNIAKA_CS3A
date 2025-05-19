// JavaScript for handling sign-up form functionality

let users = [];

// Load users from localStorage
function loadUsers() {
    const usersJSON = localStorage.getItem('users');
    if (usersJSON) {
        users = JSON.parse(usersJSON);
    }
}

// Save users to localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to save user data
function saveUser(username, password) {
    // Check if username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert("Username already exists. Please choose another.");
        return false;
    }
    // Save new user
    users.push({ username, password });
    saveUsers();
    return true;
}

// Handle sign-up form submission
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signUpUsername').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    const success = saveUser(username, password);
    if (success) {
        alert("Sign-up successful! You can now log in.");
        // Redirect to login page
        window.location.href = "logIn.html";
    }
});

// Load users on script load
loadUsers();
