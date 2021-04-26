const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000, process.env.HOST || '::', err => {
    if (err) throw err
    console.log(`server listening on ${app.server.address().port}`)
  })
