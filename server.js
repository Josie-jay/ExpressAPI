const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // middleware to parse JSON

// In-memory array to store persons
const persons = [];

// GET route - get all persons
app.get('/person', (req, res) => {
  res.json(persons);
});

// POST route - insert a new person
app.post('/person', (req, res) => {
  const { name, age, lastName } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  const newPerson = { name, age, lastName: lastName || '' };
  persons.push(newPerson);

  res.status(201).json({ message: 'Person added', person: newPerson });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
