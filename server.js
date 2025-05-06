const express = require('express');
const cors = require('cors'); // ✅ import cors
const app = express();
const port = 3000;

app.use(cors()); // ✅ enable CORS
app.use(express.json());

// Sample in-memory data
let persons = [
  { name: "Joshi", age: 30, lastName: "Okafor" },
  { name: "Ada", age: 25, lastName: "Eze" }
];

// Routes
app.get('/person', (req, res) => {
  res.json(persons);
});

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
