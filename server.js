const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname + '/public')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));