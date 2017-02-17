// CONSTANT/VAR SETUP
const endpoint = '';
const keysPressed = [];
const screenNames = [];
const atMatcher = new RegExp(/@[\w]{2}/, 'gi');

function charsLeft(chars) {
  tweetChars.innerText = 140 - chars;
};

// STEP ONE - Create a function to watch for a username to start searching for (@aa)

function findMatches (wordToMatch, screenNames) {
  // body...
}

// STEP TWO - Fetch potential username options

// STEP THREE - Create a function to filter potential usernames for user to choose from

// STEP FOUR - Create a function to display filtered list

function displayMatches() {
  console.log(this.value);
  charsLeft(this.value.length);
  if (this.value.match(atMatcher)) {
    console.log("do a search!")
  }

};



// SELECTORS
const searchInput = document.querySelector('.tweet-content');
const matches = document.querySelector('.matches');
const tweetChars = document.querySelector('.chars-left')

// EVENT LISTENERS
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keypress', displayMatches);

searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode != 16) {     // if key is NOT shift,
      keysPressed.push(e.key); //adds key to array
    };

    keysPressed.splice(0, keysPressed.length - 3) // starts from end, to end of length of screenName
    console.log(keysPressed); //shows collection of keys pressed

    if (keysPressed.join('').match(atMatcher)) {
      console.log("BOOP! Search for that TwitterPerson")
      let typedUsername = [];
      console.log(`here is the username: ${typedUsername}`)
      typedUsername.push(keysPressed);
      if (keysPressed[keysPressed.length-1] != " ") {
        typedUsername.push(keysPressed[keysPressed.length-1]);
      }
      console.log(typedUsername.join(''));
    };
  })