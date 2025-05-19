// JavaScript for handling login form functionality

let users = [];

// Load users from localStorage
function loadUsers() {
    const usersJSON = localStorage.getItem('users');
    if (usersJSON) {
        users = JSON.parse(usersJSON);
    }
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Check if user exists and password matches
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful!");
        // Redirect to loggedIn.html
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});

// Load users on script load
loadUsers();
