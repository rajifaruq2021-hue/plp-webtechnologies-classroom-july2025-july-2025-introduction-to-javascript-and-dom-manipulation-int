// --- PART 1: Variable Declarations and Conditionals ---
// We declare a constant variable for the user's role.
const userRole = "student";

// We get the HTML element where the status will be displayed.
const statusElement = document.getElementById("userStatus");

// We use an if/else conditional to check the role and update the text.
if (userRole === "student") {
    statusElement.textContent = "PLP Student";
} else {
    statusElement.textContent = "Valued Contributor";
}


// --- PART 2: At least 2 Custom Functions ---
// Function 1: To change the background color of the profile card.
function changeCardColor() {
    const profileCard = document.getElementById("profileCard");
    // We'll just switch between two colors for this example.
    if (profileCard.style.backgroundColor === "lightblue") {
        profileCard.style.backgroundColor = "#ffffff";
    } else {
        profileCard.style.backgroundColor = "lightblue";
    }
}

// Function 2: To display a greeting message.
function displayGreeting() {
    alert("Hello, Raji Faruq Ishola! Welcome to your interactive profile.");
}


// --- PART 3: At least 2 Loop Examples ---
// Loop 1: Using a 'for...of' loop to generate a list of skills.
const skills = ["HTML", "CSS", "Basic JavaScript", "Problem Solving"];
const skillsListElement = document.getElementById("skillsList");

for (const skill of skills) {
    // For each skill, we create a new list item element.
    const listItem = document.createElement("li");
    listItem.textContent = skill; // Set the text of the list item.
    skillsListElement.appendChild(listItem); // Add the item to the list in the HTML.
}

// Loop 2: A simple 'for' loop that logs numbers to the console.
console.log("Countdown:");
for (let i = 5; i > 0; i--) {
    console.log(i);
}


// --- PART 4: At least 3 DOM Interactions ---
// DOM Interaction 1: Getting the color button and adding a click event listener.
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", changeCardColor);

// DOM Interaction 2: Getting the greeting button and adding a click event listener.
const greetButton = document.getElementById("greetButton");
greetButton.addEventListener("click", displayGreeting);

// DOM Interaction 3: We already did this in Part 1 and 3!
// - We used 'getElementById' to find the status and skills list elements.
// - We used 'textContent' to change the status text.
// - We used 'appendChild' to add the skill list items to the page. This is a very powerful DOM interaction.