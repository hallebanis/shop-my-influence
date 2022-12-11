const { error } = require('winston');
const { HttpCodes, getHttpCode } = require('../utils/HttpCode');

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
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{
     * bestSalesDevice:{total_sales:Number,devise:String}
     * bestSalesCategory: {best_sale_category:Number,fr_name:String,en_name:String},
     * bestSalesColor: {color_total_sales:Number,fr_name:String,en_name:String},
     * bestSalesDay:{total_sale:Number,day:String},
     * bestSalesPeriodOfDay:{total:Number,period:String},
     * bestSalesInfluencer:{total:Number,name:String,img:String},
     * bestSalesCountry:{total:Number, countrycode:String,name:String,flag:String},
     * }>}
     */
    async getInsightsData(startDate, endDate) {
        return new Promise((resolve) => {
            const response = {
                bestSalesDevice: undefined,
                bestSalesCategory: undefined,
                bestSalesColor: undefined,
                bestSalesDay: undefined,
                bestSalesPeriodOfDay: undefined,
                bestSalesInfluencer: undefined,
                bestSalesCountry: undefined,
            };
            let processedRequest = 0;

            this.saleService
                .getBestSalesDevice(startDate, endDate)
                .then((result) => {
                    response.bestSalesDevice = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSalesDevice',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });

            this.saleService
                .getBestSalesColor(startDate, endDate)
                .then((result) => {
                    response.bestSalesColor = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSalesColor',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });

            this.saleService
                .getBestSalesCategory(startDate, endDate)
                .then((result) => {
                    response.bestSalesCategory = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSalesCategory',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });

            this.saleService
                .getBestSellsDay(startDate, endDate)
                .then((result) => {
                    response.bestSalesDay = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSellsDay',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });

            this.saleService
                .getBestSalesCountry(startDate, endDate)
                .then((result) => {
                    response.bestSalesCountry = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSalesCountry',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });

            this.saleService
                .getBestSalesInfluencer(startDate, endDate)
                .then((result) => {
                    response.bestSalesInfluencer = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSalesInfluencer',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });

            this.saleService
                .getBestSalesDayPeriod(startDate, endDate)
                .then((result) => {
                    response.bestSalesPeriodOfDay = result;
                })
                .catch((err) => {
                    console.warn(
                        'HomepageController.getInsightsData getBestSalesInfluencer',
                        err
                    );
                })
                .finally(() => {
                    processedRequest++;
                    if (processedRequest === 7) {
                        resolve(response);
                    }
                });
        });
    }

    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "DESC" | "ASC"} sort
     * @returns {Promise{total:Number,fr_name:String,en_name:String}}
     */
    async getTotalSellesPerCategory(startDate, endDate, count, offset, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleService.getTotalSellesPerCategory(
                    startDate,
                    endDate,
                    count,
                    offset,
                    sort
                );
                resolve(result);
            } catch (error) {
                console.error(
                    'homecontroller.getTotalSellesPerCategory',
                    error
                );
                reject(getHttpCode(error));
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {false | "ASC" | "DESC"} sort
     * @returns {Promise{total:Number,fr_name:String,en_name:String}}
     */
    async getTotalSellesPerdayPeriod(startDate, endDate, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleService.getSalesDayPeriod(
                    startDate,
                    endDate,
                    sort
                );
                resolve(result);
            } catch (error) {
                console.error(
                    'homecontroller.getTotalSellesPerCategory',
                    error
                );
                reject(getHttpCode(error));
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "DESC" | "ASC"} sort
     * @returns {Promise{total:Number,fr_name:String,en_name:String}}
     */
    async getTotalSalesPerDevice(startDate, endDate, count, offset, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleService.getTotalSalesPerDevice(
                    startDate,
                    endDate,
                    count,
                    offset,
                    sort
                );
                resolve(result);
            } catch (error) {
                console.error('homecontroller.getTotalSalesPerDevice', error);
                reject(getHttpCode(error));
            }
        });
    }
}

module.exports = HomePageController;
