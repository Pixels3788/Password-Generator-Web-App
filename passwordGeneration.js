let userInput;

let fullArray = [
    'a', 'H', ')', 'j', '#', ',', '.', 'u', 'M', 'p', 'c', '[', '+', '/', ';',
    'h', 's', 'B', '@', 'k', '*', '6', 'e', '8', '&', 'y', 'o', '-', '>', 'f',
    '}', '$', ']', 'i', 't', '%', '?', 'r', 'd', 'q', 'G', '<', 'z', '(', 'n',
    '{', '3', '~', 'x', 'v', '7', '!', 'b', '5', 'm', ':', '1', 'l', '4', '_',
    'w', '=', '2', 'g', '9', 'A', 'C', 'D', 'E', 'F', 'I', 'J', 'K', 'L', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '\\', '|',
    '^', '`', '"', "'", 
];
let numLetArray = [
    'l', 'E', 'Y', 'V', 'f', 'v', 'b', 'W', '9', 'g', 'P', '7', 'C', 'S', 'O',
    'w', 'Q', 'A', 'u', 'a', 'H', 'X', '4', 'Z', 'o', 'B', 'M', 'j', 'c', '3',
    'x', 'k', '5', 'U', 'd', 'r', 'y', 'J', 'F', '0', 't', 'K', 'm', 's', 'e',
    '2', 'p', '8', 'T', 'n', 'G', 'h', 'N', '6', 'q', 'R', 'L', 'D', 'i', '1',
    'I', 'z'
];

let specialCharNumArray = [
    ':', '|', '7', ')', '+', '`', '~', '$', '"', '<',
    '>', '/', '!', '=', '4', '0', '\\', '?', '2', '9',
    '&', '#', '3', '%', '*', ',', '6', '[', ']', '1',
    '^', '(', '-', '5', '8', '}', '{', ';', "'", '.',
];

let letterSpecialCharArray = [
    's', ':', 'K', '}', 'G', 'v', '{', 'a', 'f', '(', 'O', 'd', '*', 'N', '!',
    'E', 'M', '|', '>', 'R', 'x', '@', 'j', 'h', 'J', 'b', 'I', '+', 'Z', 'c',
    'e', '^', '?', 'W', '`', 'u', ';', 'L', 'B', '#', 'm', 'P', '"', 'F', '/',
    'C', 'l', '%', 'i', 'g', '[', 'A', 'S', 'n', 'T', 'H', 'r', '\\', '-', 'D',
    'Q', 'U', 'V', '(', '.', 'k', 'X', '~', 'p', 'w', 't', ']', '=', 'q', 'z',
    "'", 'Y', 'y', '&', ','
];

let letterArray = [
    'c', 'I', 'z', 'M', 'u', 'e', 'J', 'A', 'f', 't', 'S', 'g', 'v', 'B',
    'm', 'K', 'L', 'r', 'W', 'd', 'y', 'n', 'N', 'D', 'q', 'O', 'w', 'H',
    'o', 'R', 'U', 's', 'Y', 'F', 'a', 'l', 'V', 'h', 'E', 'b', 'j', 'C',
    'i', 'p', 'x', 'T', 'X', 'Q', 'Z', 'k', 'G'
];

let symbolArray = [
    '!', '|', '^', '@', '<', '[', '~', '#', '.', '+', '\\', '}', '=', '*',
    '/', '(', ':', '-', '>', '}', '&', '_', '`', ';', ']', '%', ',', '{',
    '?', "'", '"', ')', '$'
];

let realWordsArray = [
    'hero', 'Hero', 'interact', 'Interact', 'hopeful', 'Hopeful', 'rocket', 'Rocket', 'tundra', 'Tundra',
    'wander', 'Wander', 'flip', 'Flip', 'lighthouse', 'Lighthouse', 'journey', 'Journey', 'camera', 'Camera',
    'sunshine', 'Sunshine', 'friend', 'Friend', 'computer', 'Computer', 'ocean', 'Ocean', 'mountain', 'Mountain',
    'cloud', 'Cloud', 'tiger', 'Tiger', 'giraffe', 'Giraffe', 'elephant', 'Elephant', 'garden', 'Garden',
    'adventure', 'Adventure', 'problem', 'Problem', 'tree', 'Tree', 'mountain', 'Mountain', 'balloon', 'Balloon',
    'guitar', 'Guitar', 'river', 'River', 'castle', 'Castle', 'school', 'School', 'coast', 'Coast',
    'desk', 'Desk', 'rainbow', 'Rainbow', 'butterfly', 'Butterfly', 'friendship', 'Friendship', 'love', 'Love',
    'book', 'Book', 'turtle', 'Turtle', 'magic', 'Magic', 'hiking', 'Hiking', 'waterfall', 'Waterfall',
    'doghouse', 'Doghouse', 'homework', 'Homework', 'champion', 'Champion', 'race', 'Race', 'hopeful', 'Hopeful',
    'peace', 'Peace', 'success', 'Success', 'cliff', 'Cliff', 'hunter', 'Hunter', 'dreamer', 'Dreamer',
    'forest', 'Forest', 'dolphin', 'Dolphin', 'question', 'Question', 'soccer', 'Soccer', 'winter', 'Winter',
    'spring', 'Spring', 'summer', 'Summer', 'fall', 'Fall', 'breeze', 'Breeze', 'reality', 'Reality',
    'sky', 'Sky', 'kite', 'Kite', 'lightning', 'Lightning', 'owl', 'Owl', 'moon', 'Moon', 'sunset', 'Sunset',
    'begin', 'Begin', 'end', 'End', 'workshop', 'Workshop', 'advice', 'Advice', 'heaven', 'Heaven',
    'stars', 'Stars', 'flame', 'Flame', 'brave', 'Brave', 'fearless', 'Fearless', 'adore', 'Adore', 'mystery', 'Mystery',
    'puzzle', 'Puzzle', 'rain', 'Rain', 'storm', 'Storm', 'skyline', 'Skyline', 'angel', 'Angel',
    'dream', 'Dream', 'delight', 'Delight', 'courage', 'Courage', 'shine', 'Shine', 'treehouse', 'Treehouse',
    'ball', 'Ball', 'winter', 'Winter', 'breeze', 'Breeze', 'cactus', 'Cactus', 'journey', 'Journey',
    'rocket', 'Rocket', 'cloudy', 'Cloudy', 'flower', 'Flower', 'sleepy', 'Sleepy', 'smooth', 'Smooth',
    'brush', 'Brush', 'camera', 'Camera', 'photo', 'Photo', 'clouds', 'Clouds', 'riverbank', 'Riverbank',
    'serenity', 'Serenity', 'heavenly', 'Heavenly', 'butterfly', 'Butterfly', 'fractal', 'Fractal',
    'discover', 'Discover', 'explore', 'Explore', 'mango', 'Mango', 'paradise', 'Paradise', 'elephant', 'Elephant',
    'captain', 'Captain', 'laughter', 'Laughter', 'storybook', 'Storybook', 'mindful', 'Mindful', 'tropical', 'Tropical',
    'celebrate', 'Celebrate', 'victory', 'Victory', 'inspire', 'Inspire', 'free', 'Free', 'strength', 'Strength',
    'swimmer', 'Swimmer', 'horizon', 'Horizon', 'starlight', 'Starlight', 'remark', 'Remark', 'mount', 'Mount',
    'tundra', 'Tundra', 'desert', 'Desert', 'earth', 'Earth', 'dawn', 'Dawn', 'twilight', 'Twilight',
    'mystic', 'Mystic', 'escape', 'Escape', 'volcano', 'Volcano', 'island', 'Island', 'harmony', 'Harmony',
    'canyon', 'Canyon', 'puzzle', 'Puzzle', 'pyramid', 'Pyramid', 'twist', 'Twist', 'flash', 'Flash',
    'dreamer', 'Dreamer', 'snuggle', 'Snuggle', 'triumph', 'Triumph', 'jungle', 'Jungle', 'paradise', 'Paradise',
    'glow', 'Glow', 'sparkle', 'Sparkle', 'glimmer', 'Glimmer', 'quest', 'Quest', 'hope', 'Hope',
    'calm', 'Calm', 'serenity', 'Serenity', 'tranquil', 'Tranquil', 'aqua', 'Aqua', 'bliss', 'Bliss',
    'vibrant', 'Vibrant', 'rush', 'Rush', 'delight', 'Delight', 'swoosh', 'Swoosh', 'ocean', 'Ocean',
    'splash', 'Splash', 'echo', 'Echo', 'whisper', 'Whisper', 'glisten', 'Glisten', 'drift', 'Drift',
    'shimmer', 'Shimmer', 'bubble', 'Bubble', 'giddy', 'Giddy', 'wander', 'Wander', 'flip', 'Flip',
    'leap', 'Leap', 'joy', 'Joy', 'solace', 'Solace', 'stretch', 'Stretch', 'whistle', 'Whistle',
    'orbit', 'Orbit', 'spark', 'Spark', 'flutter', 'Flutter', 'shines', 'Shines', 'peaceful', 'Peaceful',
    'grin', 'Grin', 'gleam', 'Gleam', 'lucky', 'Lucky', 'hop', 'Hop', 'quest', 'Quest', 'skip', 'Skip',
    'whimsy', 'Whimsy', 'roar', 'Roar', 'plume', 'Plume', 'dreamy', 'Dreamy', 'glimpse', 'Glimpse',
    'trick', 'Trick', 'ride', 'Ride', 'breeze', 'Breeze', 'shine', 'Shine', 'dazzle', 'Dazzle',
    'glee', 'Glee', 'guitar', 'Guitar', 'rainbow', 'Rainbow', 'mango', 'Mango', 'serenity', 'Serenity',
    'drift', 'Drift', 'moon', 'Moon', 'storm', 'Storm', 'flash', 'Flash', 'voyage', 'Voyage',
    'glare', 'Glare', 'waves', 'Waves', 'splash', 'Splash', 'sun', 'Sun', 'wave', 'Wave', 'rescue', 'Rescue',
    'flicker', 'Flicker', 'tornado', 'Tornado', 'bright', 'Bright', 'hike', 'Hike', 'clear', 'Clear',
    'hiker', 'Hiker', 'shine', 'Shine', 'glow', 'Glow', 'blossom', 'Blossom', 'fall', 'Fall',
    'skip', 'Skip', 'rain', 'Rain', 'hopeful', 'Hopeful', 'future', 'Future', 'jump', 'Jump',
    'leap', 'Leap', 'celebrate', 'Celebrate', 'wander', 'Wander', 'eagle', 'Eagle', 'mountain', 'Mountain',
    'enjoy', 'Enjoy', 'thrive', 'Thrive', 'starlight', 'Starlight', 'skylight', 'Skylight', 'stormy', 'Stormy',
    'dawn', 'Dawn', 'sunshine', 'Sunshine', 'reminder', 'Reminder', 'gale', 'Gale', 'beach', 'Beach',
    'deep', 'Deep', 'moisture', 'Moisture', 'breeze', 'Breeze', 'strive', 'Strive', 'run', 'Run',
    'play', 'Play', 'expedition', 'Expedition', 'horizon', 'Horizon', 'spark', 'Spark', 'whisper', 'Whisper',
    'cloud', 'Cloud', 'mount', 'Mount', 'wave', 'Wave', 'dawn', 'Dawn', 'sun', 'Sun', 'sands', 'Sands',
    'soar', 'Soar'
];

const savedPasswords = [];

let generatedPassword = "";

let typeOfPassword = "";

let strengthScore = 0.000;

const lowerLetterRegex = /[a-z]/;

const upperLetterRegex = /[A-Z]/;

const numberRegex = /[0-9]/;

const specialCharRegex = /[^a-zA-Z0-9]/;

// checks for the kinds of characters inside the password and assigns a score depending on what it finds
function kindsOfCharactersCheck() {
    var hasLowerLetter = false;
    var hasUpperLetter = false;
    var hasNum = false;
    var hasSpecialChar = false;

    var kindsOfCharScore = 0.00;

    for (var i = 0; i < generatedPassword.length; i++) {
        if (!hasLowerLetter && lowerLetterRegex.test(generatedPassword[i])) {
            hasLowerLetter = true;
            kindsOfCharScore += 8.335;
        }
        else if (!hasUpperLetter && upperLetterRegex.test(generatedPassword[i])) {
            hasUpperLetter = true;
            kindsOfCharScore += 8.335;
        }
        else if (!hasNum && numberRegex.test(generatedPassword[i])) {
            hasNum = true;
            kindsOfCharScore += 8.335;
        }
        else if (!hasSpecialChar && generatedPassword[i] == specialCharRegex) {
            hasSpecialChar = true;
            kindsOfCharScore += 8.335;
        }
    }
    strengthScore += kindsOfCharScore;
}

function passwordLengthStrengthCheck() {
    for (var i = 0; i < generatedPassword.length; i++) {
        strengthScore += 0.67
    }
}


function repeatedCharacterCheck() {
    var repeatedCharScore = 33.33;
    for (var i = 0; i < generatedPassword.length - 1; i++) {
        if (generatedPassword[i] == generatedPassword[i + 1]) {
            repeatedCharScore -= 1.00;
        }
    }
    strengthScore += repeatedCharScore;
}

function checkPasswordStrength() {
    strengthScore = 0.00;
    kindsOfCharactersCheck();
    passwordLengthStrengthCheck();
    repeatedCharacterCheck();
}

function updatePasswordStrengthBox() {
    console.log(strengthScore);
    if (strengthScore <= 25.00) {
        document.querySelector("p.password-strength").textContent = "Password Strength: Weak";
        document.querySelector("p.password-strength").style.backgroundColor = "red";
    }
    else if (strengthScore <= 50.00) {
        document.querySelector("p.password-strength").textContent = "Password Strength: Moderate";
        document.querySelector("p.password-strength").style.backgroundColor = "yellow";
        document.querySelector("p.password-strength").style.color = "black";
    }
    else if (strengthScore <= 75.00) {
        document.querySelector("p.password-strength").textContent = "Password Strength: Strong";
    }
    else if (strengthScore <= 100.00) {
        document.querySelector("p.password-strength").textContent = "Password Strength: Very Strong";
        document.querySelector("p.password-strength").style.backgroundColor = "#006400";
    }
    else if (strengthScore > 100) {
        strengthScore = 100;
    }
}

function savePassword() {
    if (generatedPassword == "") {
        alert("Please generate a password before you hit save :)")
    } else {
        savedPasswords.push(generatedPassword);
        alert("Password has been saved!");
    }
    
}

function downloadSavedPasswords() {
    if (savedPasswords.length == 0) {
        alert("Please save some passwords before you attempt to download")
    } else {
        const blob = new Blob([savedPasswords.join('\n\n')], {type: "text/plain;charset=utf-8"});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        var filename = prompt("Enter what you want to name the file");
        a.download = filename + ".txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
// incorporates the fisher-yates shuffling algorithim to shuffle the array that gets passed in
function shuffleArray(array) {
    var i = array.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random()*(i+1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
}

function generatePassword(array) {
    generatedPassword = "";

    document.querySelector("#password-output").textContent = "";

    shuffleArray(array);

    for (let i = 0; i < userInput; i++) {
        const randomChar = Math.floor(Math.random() * array.length);
        generatedPassword += array[randomChar];
    }

    document.querySelector("#password-output").textContent = generatedPassword;
}
// takes user input for the length of the password
function getUserInput() {
    userInput = document.querySelector("input").value;
    userInput = Number(userInput);
    if (isNaN(userInput) || userInput <= 7 || userInput > 50) {
        alert("Please enter a number between 8-50");
        return false;
    }
    return true;
}

function getDropDownSelection() {
    typeOfPassword = document.querySelector("#dropdownSelection").value;
}



function handleGenerate() {
    if (getUserInput()) {
        getDropDownSelection();
        switch (typeOfPassword) {
            case "Numbers and letters":
                generatePassword(numLetArray);
                break;
            case "letters, numbers, and symbols":
                generatePassword(fullArray);
                break;
            case "Numbers and symbols":
                generatePassword(specialCharNumArray);
                break;
            case "Letters and symbols":
                generatePassword(letterSpecialCharArray);
                break;
            case "Letters only":
                generatePassword(letterArray);
                break;
            case "Symbols only":
                generatePassword(symbolArray);
                break;
            case "Series of random words":
                generatePassword(realWordsArray);
                break;
            default:
                alert("Please select the type of password you want to generate");
        }
        checkPasswordStrength();
        updatePasswordStrengthBox();
    }
}
