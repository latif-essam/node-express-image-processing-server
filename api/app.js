const app = require('express');
const path = require('path');
const pathToIndex = path.resolve(__dirname, '../client/index.html');
app.use('/*', (req, res) => {
    res.sendFile(pathToIndex);
})


module.exports = app;

