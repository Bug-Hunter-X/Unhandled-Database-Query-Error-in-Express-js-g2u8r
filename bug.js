const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if the database query fails
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Improper error handling: throws an error to the client
      throw err; 
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});