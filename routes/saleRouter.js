const router = require('express').Router();
/**
 *
 * @param {import('../controllers/HomePageController')} homePageController
 * @returns {import('express').Router}
 */
function saleRouter(homePageController) {
    // return async function (req, res) {
    //     const t = await conversionController.getAll();
    //     res.send(t);
    // };
    router.get('/performances', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            let result = await homePageController.getGlobalPerformance(
                startDate,
                endDate
            );
            res.send(result);
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
    return router;
}

module.exports = saleRouter;
