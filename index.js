const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema')
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')

connectDB();
const myLogger = function(req, res, next){
    console.log(req.path)
    next()
}

app.use(myLogger);

app.use(cookieParser());

app.use(authenticate);

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true,
}))

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

