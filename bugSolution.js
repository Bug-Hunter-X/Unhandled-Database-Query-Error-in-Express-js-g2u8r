const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      // Send a proper error response to the client
      return res.status(500).json({ error: 'Failed to retrieve data from database' });
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});