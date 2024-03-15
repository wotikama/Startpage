// Get the hour
let today = new Date();
let hour = today.getHours();

// Here you can change your name
let user = 'Pablo';

// Here you can change your greetings
let gree1 = 'Good night, ';
let gree2 = 'Good morning, ';
let gree3 = 'Good afternoon, ';
let gree4 = 'Good evening, ';

// Define the hours of the greetings
if (hour >= 21 && hour < 5) {
    document.querySelector('.c-greeting').innerText = gree1 + user;
} else if (hour >= 6 && hour < 12) {
    document.querySelector('.c-greeting').innerText = gree2 + user;
} else if (hour >= 12 && hour < 17) {
    document.querySelector('.c-greeting').innerText = gree3 + user;
} else  {
    document.querySelector('.c-greeting').innerText = gree4 + user;
}
