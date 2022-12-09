const router = require('express').Router();
/**
 *
 * @param {import('../controllers/coversionController')} conversionController
 * @returns {import('express').Router}
 */
function conversionRouter(conversionController) {
    // return async function (req, res) {
    //     const t = await conversionController.getAll();
    //     res.send(t);
    // };
    router.get('/', async (req, res) => {
        try {
            const startDate = req.query?.start || 0;
            const endDate = req.query?.end || Date.now();
            let result = await conversionController.getAll(startDate, endDate);
            res.send(result);
        } catch (error) {
            res.status(error.code).send(error);
        }
    });
    return router;
}

module.exports = conversionRouter;
