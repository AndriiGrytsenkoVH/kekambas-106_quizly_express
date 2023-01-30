const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/templates/views'))

app.get('/', (req, res) => {
    res.send('Hello World')
});

const initRoutes = require('./src/routes');
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

