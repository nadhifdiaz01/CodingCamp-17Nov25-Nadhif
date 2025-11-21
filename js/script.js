welcomeMessages();

/// Function to prompt user for their name and display a welcome message
function welcomeMessages() {
    let userName = prompt("Please enter your name:");

    /// If the user did not enter a name, deafult to "Guest"
    if (!userName) {
        userName = "Guest";
    }

    /// update the welcome message on the webpage
    document.getElementById("welcome-speech").innerText =
        "Welcome, " + userName + "!";
}

/// Function to validate the message form (to be implemented)
function validateForm() {

}