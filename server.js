const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const dbConnection = require('./database/connection');

dotEnv.config();
const app = express();

//cors configuration
app.use(cors());

//db connectivity

dbConnection();

// Application level middleware

// const myMiddleware = (req, res, next) => {
//     console.log('Hey thr...');
//     next();
// }

// app.use(myMiddleware);

//request payload middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/student', require('./routes/student'));


//API Documentaion

if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

}

app.get('/', (req, res, next) => {
    res.send('First Node API Server');
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
})

//Error handling middleware

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
})

// To kill the process running in background

const processExitHandler = async(error) => {
    if (error) console.log(error);
    process.exit(error ? 1 : 0);
};

process.on('exit', processExitHandler);
process.on('SIGINT', processExitHandler); // Catches ctrl+c
process.on('SIGUSR1', processExitHandler); // SIGUSR1 and SIGUSR2 are for `kill pid` (ex: nodemon restart)
process.on('SIGUSR2', processExitHandler);
process.on('uncaughtException', processExitHandler);