const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use('/api/doctors', require('./routes/doctors'));

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
