const express = require('express');
const app = express();
const port = 0.0.0.0;
app.listen(port, () => console.log(Bot running on http://localhost:${port}));
