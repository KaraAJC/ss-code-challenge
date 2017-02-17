// CONSTANT/VAR SETUP
const endpoint = '';
const screenNames = [];


// STEP ONE - Create a function to watch for a username to start searching for (@aa)

// STEP TWO - Fetch potential username options

// STEP THREE - Create a function to filter potential usernames for user to choose from

// STEP FOUR - Create a function to display filtered list

function displayMatches() {
  console.log(this.value);
}


// SELECTORS
const searchInput = document.querySelector('.tweet-content');
const matches = document.querySelector('.matches');

// EVENT LISTENERS
searchInput.addEventListener('change', displayMatches);