const router = require('express').Router();

/**
 *
 * @param {import('../controllers/HomePageController')} homePageController
 * @returns {import('express').Router}
 */
function saleRouter(homePageController) {
    /**
     * @swagger
     * /sale/performances:
     *      get:
     *          summary: provides all data for the global performance section? the api do no have an error response
     *          parameters:
     *              - in: query
     *                name: start
     *                schema:
     *                  type: intger
     *                required: false
     *                description: timestamp for the start of a period search
     *              - in: query
     *                name: end
     *                schema:
     *                  type: intger
     *                required: false
     *                description: timestamp for the end of a period search
     *          responses:
     *              200:
     *                  description: return a JSON data for the global performance section
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              example:
     *                                  {"totalSales": 2203615.6399999997,"sales_count": "69553","average_cart": "31.7578123463111486","sibled_country_count": "77","product_sales_count": "7520"}
     *                              properties:
     *                                  totalSales:
     *                                      description: total sales of the company
     *                                      type: intger
     *                                  sales_count:
     *                                      description: total sales of the company
     *                                      type: intger
     *                                  avergae_cart:
     *                                      description: avergae cart
     *                                      type: intger
     *                                  sibled_country_count:
     *                                      description: total count of the coutries where we selle our products
     *                                      type: intger
     *                                  product_sales_count:
     *                                      description: number of products selled
     *                                      type: intger
     *
     *
     */
    router.get('/performances', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            let result = await homePageController.getGlobalPerformance(
                startDate,
                endDate
            );
            res.status(200).send(result);
        } catch (error) {
            res.status(error.code).send(error);
        }
    });
    router.get('/insights', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            let result = await homePageController.getInsightsData(
                startDate,
                endDate
            );
            res.send(result);
        } catch (error) {
            res.status(error.code).send(error);
        }
    });
    router.get('/categorySales', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            const count = req.query?.count || 5;
            const offset = req.query?.offset || 0;
            const sort = req.query?.sort || 'DESC';
            let result = await homePageController.getTotalSellesPerCategory(
                startDate,
                endDate,
                count,
                offset,
                sort
            );
            res.send(result);
        } catch (error) {
            res.status(error.code).send(error);
        }
    });
    router.get('/periodSales', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            const sort = req.query?.sort || false;
            let result = await homePageController.getTotalSellesPerdayPeriod(
                startDate,
                endDate,
                sort
            );
            res.send(result);
        } catch (error) {
            res.status(error.code).send(error);
        }
    });
    router.get('/deviceSales', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            const sort = req.query?.sort || false;
            const count = req.query?.sort || 5;
            const offset = req.query?.sort || 0;
            let result = await homePageController.getTotalSalesPerDevice(
                startDate,
                endDate,
                count,
                offset,
                sort
            );
            res.send(result);
        } catch (error) {
            res.status(error.code).send(error);
        }
    });

    return router;
}

module.exports = saleRouter;
