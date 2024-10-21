// Pickup line arrays based on preferences
const pickupLines = { 
    male: {
        funny: [
            "Are you French? Because Eiffel for you.",
            "Do you have a map? I keep getting lost in your eyes.",
            "Do you believe in love at first sight, or should I walk by again?",
            "If you were a vegetable, you'd be a cute-cumber!",
            "Are you a parking ticket? Because you’ve got ‘FINE’ written all over you.",
            "Is your dad a boxer? Because you’re a knockout!",
            "Do you like raisins? How do you feel about a date?",
            "If you were a triangle, you’d be acute one.",
            "Are you an alien? Because you just abducted my heart.",
            "Do you have a name, or can I call you mine?",
            "Are you a magician? Because every time I look at you, everyone else disappears.",
            "If you were a fruit, you’d be a fineapple.",
            "Do you believe in love at first sight, or should I walk by again?",
            "Is your dad a baker? Because you're a cutie pie!",
            "Are we at the airport? Because my heart is taking off!",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Do you have a Band-Aid? Because I scraped my knee falling for you.",
            "If you were a potato, you’d be a sweet one.",
            "Are you a time traveler? Because I can see you in my future.",
            "Do you have a sunburn, or are you always this hot?",
            "You must be a magician because every time I look at you, everyone else disappears."
        ],
        romantic: [
            "You’re the only person I want to text good morning to.",
            "Your smile is the sunshine that lights up my day.",
            "If I could rearrange the alphabet, I’d put U and I together.",
            "You must be tired because you've been running through my mind all day.",
            "I’d say God bless you, but it looks like he already did.",
            "Your hand looks heavy; can I hold it for you?",
            "I must be a snowflake because I've fallen for you.",
            "If I could give you one thing in life, I would give you the ability to see yourself through my eyes.",
            "You’re like a dictionary; you add meaning to my life.",
            "Every moment without you is like a book without words.",
            "You light up my world like nobody else.",
            "If I were to ask you out, would your answer be the same as the answer to this question?",
            "You must be a campfire because you’re hot and I want s’more.",
            "You’re like a fine wine; I just get intoxicated by you.",
            "If kisses were stars, I’d give you the Milky Way.",
            "You’re the missing piece to my puzzle.",
            "You must be a parking ticket because you’ve got ‘FINE’ written all over you.",
            "I didn’t believe in love at first sight until I saw you.",
            "If beauty were a crime, you’d be serving a life sentence.",
            "You're the peanut butter to my jelly.",
            "You’re so beautiful that you made me forget my pickup line."
        ],
        clever: [
            "Are you made of copper and tellurium? Because you’re Cu-Te!",
            "If looks could kill, you’d definitely be a weapon of mass destruction.",
            "Is your name Google? Because you have everything I’m searching for.",
            "Are you a loan from a bank? Because you have my interest!",
            "If beauty were time, you’d be an eternity.",
            "Do you have an eraser? Because I can't get you out of my mind.",
            "Are you a dictionary? Because you add meaning to my life.",
            "If you were a song, you’d be the best track on the album.",
            "Is your name Wi-Fi? Because I'm feeling a connection.",
            "Are you an angle? Because you're acute.",
            "If you were a chicken, you’d be impeccable.",
            "Are you a beaver? Because daaaaam.",
            "You must be made of beryllium, gold, and titanium because you’re Be-Au-Ti.",
            "Are you a snowstorm? Because you make my heart race.",
            "You must be a keyboard because you’re just my type.",
            "If you were a book, you’d be a bestseller.",
            "Is your name Chapstick? Because you’re da balm!",
            "If you were a spice, you’d be my favorite.",
            "Are you a time traveler? Because I see you in my future.",
            "Do you have a pencil? Because I want to erase your past and write our future.",
            "Are you a camera? Because every time I look at you, I smile."
        ]
    },
    female: {
        funny: [
            "Is your name Wi-Fi? Because I'm feeling a connection.",
            "Do you have a Band-Aid? Because I scraped my knee falling for you.",
            "Are you a beaver? Because daaaaam.",
            "Do you like Star Wars? Because Yoda one for me!",
            "If you were a vegetable, you'd be a cute-cumber.",
            "Are you from Tennessee? Because you’re the only ten I see!",
            "Do you have a sunburn, or are you always this hot?",
            "Are you a snowstorm? Because you make my heart race.",
            "I must be a snowflake because I've fallen for you.",
            "Do you have a pencil? Because I want to erase your past and write our future.",
            "Is your name Chapstick? Because you’re da balm!",
            "If you were a fruit, you’d be a fineapple.",
            "You must be a magician because every time I look at you, everyone else disappears.",
            "If you were a potato, you’d be a sweet one.",
            "Are you a time traveler? Because I can see you in my future.",
            "Are you a campfire? Because you're hot and I want s'more.",
            "Are you a cat? Because I'm feline a connection between us.",
            "If you were a burger at McDonald's, you’d be the McGorgeous.",
            "Is your name Dunkin? Because you donut know how much I like you.",
            "If you were a triangle, you’d be acute one.",
            "Do you have an eraser? Because I can't get you out of my mind."
        ],
        romantic: [
            "You’re like a fine wine; I just get intoxicated by you.",
            "If kisses were stars, I’d give you the Milky Way.",
            "You had me at hello.",
            "I didn’t believe in love at first sight until I saw you.",
            "Your eyes are like the ocean; I could swim in them forever.",
            "You must be a keyboard because you’re just my type.",
            "Every time I see you, I fall in love all over again.",
            "You’re the missing piece to my puzzle.",
            "You’re like a dream come true.",
            "If I were to ask you out, would your answer be the same as the answer to this question?",
            "You light up my world like nobody else.",
            "Your hand looks heavy; can I hold it for you?",
            "You’re my favorite notification.",
            "You’re the peanut butter to my jelly.",
            "If I could give you one thing in life, I would give you the ability to see yourself through my eyes.",
            "You’re like a dictionary; you add meaning to my life.",
            "Every moment without you is like a book without words.",
            "If beauty were a crime, you’d be serving a life sentence.",
            "You’re so beautiful that you made me forget my pickup line.",
            "You’re my favorite hello and my hardest goodbye.",
            "If I had a star for every time I thought of you, I’d have a galaxy in my hand."
        ],
        clever: [
            "If you were words on a page, you’d be fine print.",
            "Are you a dictionary? Because you add meaning to my life.",
            "If you were a song, you’d be the best track on the album.",
            "Is your name Google? Because you have everything I’m searching for.",
            "Are you a loan from a bank? Because you have my interest!",
            "If beauty were time, you’d be an eternity.",
            "Are you a time traveler? Because I see you in my future.",
            "Do you have a map? Because I just got lost in your eyes.",
            "Is your name Chapstick? Because you’re da balm!",
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "If you were a burger at McDonald's, you’d be the McGorgeous.",
            "Are you an angel? Because heaven is missing one.",
            "Do you have a map? Because I keep getting lost in your eyes.",
            "Are you made of copper and tellurium? Because you’re Cu-Te!",
            "If you were a fruit, you’d be a fineapple.",
            "You must be a keyboard because you’re just my type.",
            "Is your name Wi-Fi? Because I'm feeling a connection.",
            "If you were a triangle, you’d be acute one.",
            "You must be made of beryllium, gold, and titanium because you’re Be-Au-Ti.",
            "If you were a spice, you’d be my favorite.",
            "Are you a camera? Because every time I look at you, I smile."
        ]
    }
};


// DOM Elements
const genderButtons = document.querySelectorAll('.gender-btn');
const generateBtn = document.getElementById('generate-btn');
const pickupLineDisplay = document.getElementById('pickup-line');
const saveBtn = document.getElementById('save-btn');
const favoritesSection = document.getElementById('favorites-section');
const favoritesList = document.getElementById('favorites-list');
const backBtn = document.querySelector('.close-favorites-btn'); // Back button for favorites

// Variables for selected preferences and favorites
let selectedGender = null;
let selectedTone = 'funny';  // Default tone
let favoritePickupLines = JSON.parse(localStorage.getItem('favoritePickupLines')) || [];  // Load favorites from localStorage or start with an empty array

// Function to save favorites to localStorage
const saveFavoritesToLocalStorage = () => {
    localStorage.setItem('favoritePickupLines', JSON.stringify(favoritePickupLines));
};

// Function to delete a pickup line from favorites
const deleteFavorite = (line) => {
    favoritePickupLines = favoritePickupLines.filter(favorite => favorite !== line);
    saveFavoritesToLocalStorage();  // Save updated favorites to localStorage
    displayFavorites();  // Update the displayed list
};

// Event listeners for gender selection
genderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all buttons
        genderButtons.forEach(button => button.classList.remove('active'));

        // Add active class to the clicked button and set the gender
        e.target.classList.add('active');
        selectedGender = e.target.id === 'male-btn' ? 'male' : 'female';
    });
});

// Generate button event listener
generateBtn.addEventListener('click', () => {
    if (!selectedGender) {
        alert("Please select a gender.");
        return;
    }

    // Generate a random pickup line based on selected gender and tone
    const randomIndex = Math.floor(Math.random() * pickupLines[selectedGender][selectedTone].length);
    const randomLine = pickupLines[selectedGender][selectedTone][randomIndex];

    // Display the pickup line with an animation
    pickupLineDisplay.textContent = randomLine;
    pickupLineDisplay.style.display = 'block';
    pickupLineDisplay.classList.add('animated');
});

// Save to favorites event listener
saveBtn.addEventListener('click', () => {
    const currentLine = pickupLineDisplay.textContent;

    if (currentLine && !favoritePickupLines.includes(currentLine)) {
        favoritePickupLines.push(currentLine);
        saveFavoritesToLocalStorage();  // Save to localStorage
        alert("Saved to favorites!");
    } else {
        alert("This line is already in your favorites or no line generated yet.");
    }
});

// View favorites and display them with delete option
document.getElementById('view-favorites-btn').addEventListener('click', displayFavorites);

function displayFavorites() {
    // Clear the previous list
    favoritesList.innerHTML = '';

    if (favoritePickupLines.length === 0) {
        favoritesList.innerHTML = '<p>No favorite pickup lines yet!</p>';
    } else {
        // Populate the list with favorite pickup lines
        favoritePickupLines.forEach(line => {
            const listItem = document.createElement('li');
            
            // Create text node for the pickup line
            const lineText = document.createTextNode(line);
            
            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => deleteFavorite(line));  // Add event listener to delete the line
            
            // Append the line text and delete button to the list item
            listItem.appendChild(lineText);
            listItem.appendChild(deleteBtn);

            // Append the list item to the favorites list
            favoritesList.appendChild(listItem);
        });
    }

    // Show the favorites section
    favoritesSection.style.display = 'block';
}

// Back to main button functionality
backBtn.addEventListener('click', () => {
    favoritesSection.style.display = 'none'; // Hide favorites section
    pickupLineDisplay.style.display = 'none'; // Hide the last generated pickup line
});

// Load saved favorites from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (favoritePickupLines.length > 0) {
        console.log("Favorites loaded from localStorage:", favoritePickupLines);
    }
});
