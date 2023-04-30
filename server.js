const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/auth', async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: 'secret...' });
});

app.listen(3027);
