const router = require('express').Router();

/**
 *
 * @param {import('../controllers/HomePageController')} homePageController
 * @returns {import('express').Router}
 */
function saleRouter(homePageController) {
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
