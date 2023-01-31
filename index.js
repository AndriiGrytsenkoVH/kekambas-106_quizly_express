const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { connectDB } = require('./src/db');

connectDB();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/templates/views'))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World')
});

const initRoutes = require('./src/routes');
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

