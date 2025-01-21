// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Array of sample ideas
const ideas = {
  'sci-fi': [
    'A futuristic city powered entirely by AI.',
    'A mission to colonize a distant planet gone awry.',
    'Humans discovering they are part of a simulation.',
  ],
  business: [
    'A startup that turns recycled plastic into building materials.',
    'An app that connects local farmers directly to consumers.',
    'A subscription service for personalized productivity tools.',
  ],
  art: [
    'A series of paintings inspired by dreams.',
    'Interactive installations that change based on audience input.',
    'A comic book that blends mythology with modern themes.',
  ],
};

// Route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// API endpoint to generate a random idea
app.post('/generate', (req, res) => {
  const genre = req.body.genre.toLowerCase();
  const genreIdeas = ideas[genre];

  if (genreIdeas) {
    const randomIdea =
      genreIdeas[Math.floor(Math.random() * genreIdeas.length)];
    res.json({ idea: randomIdea });
  } else {
    res.json({ idea: "Sorry, we don't have ideas for that genre yet!" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
