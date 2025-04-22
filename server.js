const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.get('/api/message', (req, res) => {
  res.json({ message: "This is a dynamic message from the server!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
