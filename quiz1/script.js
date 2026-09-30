document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("dynamic-greeting");
    if (greetingElement) {
        const hour = new Date().getHours();
        let greeting = "Welcome";
        if (hour < 12) greeting = "Good Morning";
        else if (hour < 18) greeting = "Good Afternoon";
        else greeting = "Good Evening";
        greetingElement.innerText = greeting + "!";
    }
});