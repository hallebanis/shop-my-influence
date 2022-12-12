const express = require('express');
const cors = require('cors');
const winston = require('winston');
require('dotenv').config();
const expressWinston = require('express-winston');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { connect, getDbClient } = require('./helpers/dbConnection');
connect();

const client = getDbClient();
//repositries
const saleRepository = new (require('./repositries/SaleRepository'))({
    dbClient: client,
});
//services
const saleService = new (require('./services/SaleService'))({
    saleRepository,
});
//controllers
const homePageController = new (require('./controllers/HomePageController'))({
    saleService,
});

const app = express();
const PORT = 4001;

const Constants = new (require('./helpers/Constants'))(
    process.env.APP_PORT || PORT
);
const specs = swaggerJsDoc(Constants.swaggerOptions);

app.use(cors());
app.use(express.json());
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
        colorize: true,
    })
);
//swagger config
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.get('/', (req, res) => {
    res.send('Shop my influence');
});

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
app.get('/healthcheck', async (req, res) => {
    res.json({ status: 200, server: 'running' });
});

app.use('/sale', require('./routes/saleRouter')(homePageController));

app.listen(process.env.APP_PORT || PORT, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(`server is running on ${process.env.APP_PORT || PORT}`);
});
