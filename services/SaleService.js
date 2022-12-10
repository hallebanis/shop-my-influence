const CC = require('currency-converter-lt');

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
    async getTotalSales(startDate, endDate) {
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
    async getSalesCount(startDate, endDate) {
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
    async averageCart(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.result(
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
    async sibledCountryCount(startDate, endDate) {
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
    async productSalesCount(startDate, endDate) {
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
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns
     */
    async getBestSalesDevice(
        startDate,
        endDate,
        count,
        offset,
        order,
        orderColumns
    ) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.saleRepository.getBestSalesDevice(
                    startDate,
                    endDate,
                    count,
                    offset,
                    order,
                    orderColumns
                );
                resolve(result);
            } catch (error) {
                console.error('SaleService.getTotalSales', error);
                reject(error);
            }
        });
    }
}

module.exports = SaleService;
