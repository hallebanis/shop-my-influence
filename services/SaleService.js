const CC = require('currency-converter-lt');
const { getCountryDetails, getKeyByValue } = require('../helpers/helpers');
const constants = new (require('../helpers/Constants'))();

class SaleService {
    /**
     *
     * @param {{
     * saleRepository:import('../repositries/SaleRepository')
     * }} input
     */
    constructor(input) {
        this.saleRepository = input?.saleRepository;
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{totalSales:Number}>}
     */
    getTotalSales(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const totalSalesResult =
                    await this.saleRepository.getTotalSales(startDate, endDate);
                console.log(totalSalesResult);
                let totalSales = 0;
                for (let i in totalSalesResult) {
                    if (
                        totalSalesResult[i].currency &&
                        totalSalesResult[i].currency !== 'NULL'
                    ) {
                        let currencyConverter = new CC({
                            from: totalSalesResult[i].currency,
                            to: 'EUR',
                            amount: parseInt(totalSalesResult[i].ca),
                        });
                        totalSales =
                            totalSales + (await currencyConverter.convert());
                    }
                }
                resolve({ totalSales });
            } catch (error) {
                console.error('SaleService.getTotalSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{sales_count:Number}>}
     */
    getSalesCount(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.saleRepository.getSalesCount(
                    startDate,
                    endDate
                );
                resolve(response);
            } catch (error) {
                console.error('SaleService.getTotalSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{average_cart:Number}>}
     */
    averageCart(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.averageCart(
                    startDate,
                    endDate
                );
                resolve(result);
            } catch (error) {
                console.error('SaleService.getTotalSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{sibled_country_count:Number}>}
     */
    sibledCountryCount(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.sibledCountryCount(
                    startDate,
                    endDate
                );
                resolve(result);
            } catch (error) {
                console.error('SaleService.getTotalSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{product_sales_count:Number}>}
     */
    productSalesCount(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.productSalesCount(
                    startDate,
                    endDate
                );
                resolve(result);
            } catch (error) {
                console.error('SaleService.getTotalSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{total_sales:Number,devisetype:String}>}
     */
    getBestSalesDevice(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getBestSalesDevice(
                    startDate,
                    endDate,
                    1,
                    0,
                    'DESC',
                    ['total_sales']
                );
                resolve(result[0] || result);
            } catch (error) {
                console.error('SaleService.getBestSalesDevice', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{color_total_sales:Number,fr_name:String,en_name:String}>}
     */
    getBestSalesColor(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getColorsTotalSales(
                    startDate,
                    endDate,
                    1,
                    0,
                    'DESC',
                    ['color_total_sales']
                );
                resolve(result[0] || result);
            } catch (error) {
                console.error('SaleService.getBestSalesColor', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{best_sale_category:Number,fr_name:String,en_name:String}>}
     */
    getBestSalesCategory(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getSalesPerCategory(
                    startDate,
                    endDate,
                    1,
                    0,
                    'DESC',
                    ['best_sale_category']
                );
                resolve(result[0] || result);
            } catch (error) {
                console.error('SaleService.getBestSalesCategory', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{total_sale:Number,day:String}>}
     */
    getBestSellsDay(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getSaleesPerDay(
                    startDate,
                    endDate,
                    'DESC',
                    ['total_sale']
                );
                result[0].day = getKeyByValue(constants.days, result[0].day);
                resolve(result[0]);
            } catch (error) {
                console.error('SaleService.getBestSellsDay', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Promise<{total:Number, countrycode:String,name:String,flag:String}>}
     */
    getBestSalesCountry(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.GetCountriesTotalSales(
                    startDate,
                    endDate,
                    1,
                    0,
                    'DESC',
                    ['total']
                );
                const details = getCountryDetails(result[0].countrycode);

                resolve({ ...result[0], ...details });
            } catch (error) {
                console.error('SaleService.getBestSalesColor', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{total:Number,name:String,img:String}>}
     */
    getBestSalesInfluencer(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result =
                    await this.saleRepository.getInfluencersTotalSales(
                        startDate,
                        endDate,
                        1,
                        0,
                        'DESC',
                        ['total']
                    );
                resolve(result[0]);
            } catch (error) {
                console.error('SaleService.getBestSalesColor', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise{total:Number,os:String}}
     */
    getBestOsSales(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getOsTotalSales(
                    startDate,
                    endDate,
                    1,
                    0,
                    'DESC',
                    ['total']
                );
                resolve(result[0]);
            } catch (error) {
                console.error('SaleService.getBestOsSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {Promise<{total:Number,period:String}>}
     */
    getBestSalesDayPeriod(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getSalesHours(
                    startDate,
                    endDate,
                    'DESC',
                    ['total_sales']
                );
                const periods = constants.dayPeriod;
                const response = {
                    morning: 0,
                    afterNoon: 0,
                    evening: 0,
                    night: 0,
                };
                result.forEach((elm) => {
                    let assigned = false;
                    for (let key in periods) {
                        if (
                            elm.hour >= periods[key].start &&
                            elm.hour < periods[key].end
                        ) {
                            response[key] =
                                response[key] + parseFloat(elm.total_sales);
                            assigned = true;
                        }
                    }
                    if (!assigned) {
                        response['night'] =
                            response['night'] + parseFloat(elm.total_sales);
                    }
                });
                const max_totals = Math.max(...Object.values(response));
                const max_period = getKeyByValue(response, max_totals);
                resolve({ period: max_period, total: max_totals });
            } catch (error) {
                console.error('SaleService.getBestOsSales', error);
                reject(error);
            }
        });
    }
    //third section
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "DESC" | "ASC"} sort
     * @returns {Promise<Array<{total:Number,fr_name:String,en_name:String}>>}
     */
    getTotalSellesPerCategory(startDate, endDate, count, offset, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const result =
                    await this.saleRepository.getCategoriesTotalSales(
                        startDate,
                        endDate,
                        count,
                        offset,
                        sort,
                        ['total']
                    );
                resolve(result);
            } catch (error) {
                console.error('SaleService.getBestOsSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {false | "ASC" | "DESC"} sort
     * @returns {Promise<{total:Number,period:String}>}
     */
    getSalesDayPeriod(startDate, endDate, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getSalesHours(
                    startDate,
                    endDate,
                    sort,
                    ['total']
                );
                const periods = constants.dayPeriod;
                const response = {
                    morning: 0,
                    afterNoon: 0,
                    evening: 0,
                    night: 0,
                };
                result.forEach((elm) => {
                    let assigned = false;
                    for (let key in periods) {
                        if (
                            elm.hour >= periods[key].start &&
                            elm.hour < periods[key].end
                        ) {
                            response[key] =
                                response[key] + parseFloat(elm.total_sales);
                            assigned = true;
                        }
                    }
                    if (!assigned) {
                        response['night'] =
                            response['night'] + parseFloat(elm.total_sales);
                    }
                });
                console.log(response);
                resolve(response);
            } catch (error) {
                console.error('SaleService.getBestOsSales', error);
                reject(error);
            }
        });
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @returns {Promise{total:Number,os:String}}
     */
    getTotalSalesPerDevice(startDate, endDate, count, offset, sort) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getBestSalesDevice(
                    startDate,
                    endDate,
                    count,
                    offset,
                    sort,
                    ['total']
                );
                resolve(result);
            } catch (error) {
                console.error('SaleService.getBestOsSales', error);
                reject(error);
            }
        });
    }
}

module.exports = SaleService;
