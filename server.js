const express = require('express');
const app = express();
const PORT = 3000;

// Middleware (optional for this case, but used to parse JSON if needed)
app.use(express.json());

// GET /health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is healthy' });
});

// GET /person endpoint
app.get('/person', (req, res) => {
  const person = {
    name: "Joshi",
    lastName: "Jay",        // <-- New field added
    age: "27"
  };
  res.json(person);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
