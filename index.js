const express = require('express');
const cors = require('cors');
const winston = require('winston');
// const { Client } = require('pg');
const expressWinston = require('express-winston');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { connect, getDbClient } = require('./helpers/dbConnection');
connect();
const client = getDbClient();
const conversionDataSource = new (require('./data/ConversionDataSource'))({
    dbClient: client,
});
const conversionService = new (require('./services/ConversionService'))({
    conversionDataSource,
});
const ConversionController = new (require('./controllers/coversionController'))(
    { conversionService }
);

require('dotenv').config();

const app = express();
const PORT = 4001;

const Constants = new (require('./Constants'))(process.env.APP_PORT || PORT);
const specs = swaggerJsDoc(Constants.swaggerOptions);

app.use(cors());
app.use(express.json());
// const client = new Client({
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     user: process.env.PG_USER,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
// });

// client
//     .connect()
//     .then(() => console.log('database connected'))
//     .catch((err) => console.error('database connection', err));

// conversionDataSource
//     .getTotalSales()
//     .then((res) => console.log('conversionDataSource', res));
// conversionService.getAll();
// ConversionController.getAll();

//winston configs
app.use(
    expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
        meta: false,
        msg: 'HTTP',
        expressFormat: true,
        colorize: false,
    })
);
//swagger config
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
// app.use('/conversion', require('./routes/conversionsRoutes'));
/**
 * @swagger
 * /healthcheck:
 *      get:
 *          summary: healthcheck endpoint
 *          responses:
 *              200:
 *                  description: return amessage if the server is up and running
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *
 *
 */
app.use('/sale', require('./routes/conversionsRoutes')(ConversionController));
app.get('/healthcheck', async (req, res) => {
    res.json({ status: 200, server: 'running' });
});

app.listen(process.env.APP_PORT || PORT, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(`server is running on ${process.env.APP_PORT || PORT}`);
});
