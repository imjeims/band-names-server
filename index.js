const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(3000, (err) => {
    if (err) throw new Error(err);

    console.log('server running on port:', 3000)
});