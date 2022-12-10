const { error } = require('winston');

class HomePageController {
    /**
     *
     * @param {{
     * saleService:import('../services/SaleService')
     * }} input
     */
    constructor(input) {
        this.saleService = input?.saleService;
    }
    async getGlobalPerformance(startDate, endDate) {
        return new Promise((resolve, reject) => {
            const response = {
                totalSales: undefined,
                sales_count: undefined,
                average_cart: undefined,
                sibled_country_count: undefined,
                product_sales_count: undefined,
            };
            let processedRequest = 0;
            this.saleService
                .getTotalSales(startDate, endDate)
                .then((result) => {
                    response.totalSales = result.totalSales;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getGlobalPerformance getTotalSales',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 5) {
                        resolve(response);
                    }
                });

            this.saleService
                .getSalesCount(startDate, endDate)
                .then((result) => {
                    response.sales_count = result.sales_count;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getGlobalPerformance getSalesCount',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 5) {
                        resolve(response);
                    }
                });

            this.saleService
                .averageCart(startDate, endDate)
                .then((result) => {
                    response.average_cart = result.average_cart;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getGlobalPerformance averageCart',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 5) {
                        resolve(response);
                    }
                });

            this.saleService
                .sibledCountryCount(startDate, endDate)
                .then((result) => {
                    response.sibled_country_count = result.sibled_country_count;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getGlobalPerformance sibledCountryCount',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 5) {
                        resolve(response);
                    }
                });

            this.saleService
                .productSalesCount(startDate, endDate)
                .then((result) => {
                    response.product_sales_count = result.product_sales_count;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getGlobalPerformance productSalesCount',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 5) {
                        resolve(response);
                    }
                });
        });
    }
}

module.exports = HomePageController;
