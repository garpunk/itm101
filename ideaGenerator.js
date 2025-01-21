const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'ideas.json');

// Function to read JSON and get a random idea
function getRandomIdea() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the JSON file:', err.message);
      return;
    }

    try {
      const jsonData = JSON.parse(data); // Parse the JSON data
      const ideas = jsonData.ideas; // Access the "ideas" array

      if (!Array.isArray(ideas) || ideas.length === 0) {
        console.log('No ideas found in the JSON file.');
        return;
      }

      const randomIndex = Math.floor(Math.random() * ideas.length); // Generate a random index
      console.log('Random Idea:', ideas[randomIndex]); // Print a random idea
    } catch (parseError) {
      console.error('Error parsing the JSON file:', parseError.message);
    }
  });
}

// Call the function
getRandomIdea();
