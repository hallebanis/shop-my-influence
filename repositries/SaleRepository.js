const { addOrderBy } = require('../helpers/helpers');

class SaleRepository {
    /**
     *
     * @param {{
     * dbClient:import('pg').Client
     * }} input
     */
    constructor(input) {
        this.dbClient = input?.dbClient;
    }
    /**
     *
     * @param {Number} count
     * @param {Number} offset
     * @returns {Array<import('../models/Conversion')>}
     */
    async getAllConversions(count = 10, offset = 0) {
        try {
            const query = `SELECT * FROM conversions limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getAllConversions', error);
            throw error;
        }
    }
    //first section quries
    /**
     *returns the total sales for each currency
     * @param {Number} startDate unix timestamp
     * @param {Number} endDate unix timestamp
     * @returns {Array<{ca:Number,currency:String}>}
     */
    async getTotalSales(startDate, endDate) {
        try {
            const query = `SELECT SUM(amount) AS CA,currency FROM conversions where createdat BETWEEN ${startDate} AND ${endDate} GROUP BY currency`;
            const result = await this.dbClient.query(query);
            console.log(result.rows);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {{sales_count:Number}}
     */
    async getSalesCount(startDate, endDate) {
        try {
            const query = `SELECT COUNT(key) AS sales_count FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('getSalesCount', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {{average_cart:Number}}
     */
    async averageCart(startDate, endDate) {
        try {
            const query = `SELECT AVG(amount) AS average_cart FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('averageChart', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {{sibled_country_count:Number}}
     */
    async sibledCountryCount(startDate, endDate) {
        try {
            const query = `SELECT COUNT(DISTINCT countrycode) AS sibled_country_count FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('sibledCountryCount', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @returns {{product_sales_count:Number}}
     */
    async productSalesCount(startDate, endDate) {
        try {
            const query = `SELECT COUNT(DISTINCT articleid) AS product_sales_count FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('productSalesCount', error);
            throw error;
        }
    }
    //second section
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{total_sales:Number,devisetype:String}>}
     */
    async getBestSalesDevice(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `SELECT SUM(amount) AS total_sales, devisetype FROM conversions where createdat BETWEEN ${startDate} AND ${endDate} GROUP BY devisetype `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getBestSalesDevice', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {{color_total_sales:Number,fr_name:String}}
     */
    async getColorsTotalSales(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `SELECT SUM(amount) AS color_total_sales,fr_name, en_name FROM conversions  
            RIGHT JOIN colors on colors.key=conversions.maincolor 
            WHERE maincolor <> 'NULL' AND createdat BETWEEN ${startDate} AND ${endDate} 
            GROUP BY en_name,colors.fr_name `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getColorsTotalSales', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{best_sale_category:Number,fr_name:String,en_name:String}>}
     */
    async getSalesPerCategory(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `SELECT COUNT(categ) AS best_sale_category,fr_name, en_name FROM conversions  RIGHT JOIN categories on categories.key=conversions.categ 
            WHERE categ <> 'NULL' AND createdat BETWEEN ${startDate} AND ${endDate} GROUP BY categ,categories.fr_name, categ,categories.en_name `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getSalesPerCategory', error);
            throw error;
        }
    }
    /**
     *
     * @param {String} startDate
     * @param {String} endDate
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{total_sale:Number,day:Number}>}
     */
    async getSaleesPerDay(
        startDate,
        endDate,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = ` select SUM(amount) as total_sale,extract(dow from TO_TIMESTAMP(createdat)) as day from conversions 
            WHERE createdat BETWEEN ${startDate} AND ${endDate} GROUP BY day `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            console.log(query);
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{hour_count_sale:Number,hour:Number,total_sales:Number}>}
     */
    async getSalesHours(startDate, endDate, order = false, orderColumns = []) {
        try {
            let query = ` SELECT COUNT(extract(hour from TO_TIMESTAMP(createdat)) ) as hour_count_sale,extract(hour from TO_TIMESTAMP(createdat)) as hour, sum(amount) as total_sales from conversions 
            WHERE createdat BETWEEN ${startDate} AND ${endDate} group by hour `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            console.log(query);
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getSalesHours', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{total:Number,countrycode:String}>}
     */
    async GetCountriesTotalSales(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `select SUM(amount) as total,countrycode from conversions WHERE createdat BETWEEN ${startDate} AND ${endDate} group by countrycode `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('GetCountriesTotalSales', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{total:Number,name:String,img:String}>}
     */
    async getInfluencersTotalSales(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `SELECT SUM(amount) AS total,name, img FROM conversions  RIGHT JOIN influencers on influencers.key=conversions.influencer WHERE conversions.createdat BETWEEN ${startDate} AND ${endDate} GROUP BY name,img `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getInfluencersTotalSales', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{total:Number,os:String}>}
     */
    async getOsTotalSales(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `SELECT SUM(amount) AS total, os from conversions WHERE createdat BETWEEN ${startDate} AND ${endDate} GROUP BY os `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    /**
     *
     * @param {Number} startDate
     * @param {Number} endDate
     * @param {Number} count
     * @param {Number} offset
     * @param {false | "ASC" | "DESC"} order
     * @param {Array<String>} orderColumns
     * @returns {Array<{total:Number,fr_name:String,en_name:String}>}
     */
    async getCategoriesTotalSales(
        startDate,
        endDate,
        count = 5,
        offset = 0,
        order = false,
        orderColumns = []
    ) {
        try {
            let query = `SELECT SUM(amount) AS total, fr_name, en_name from conversions RIGHT JOIN categories on categories.key=conversions.categ WHERE conversions.createdat BETWEEN ${startDate} AND ${endDate} GROUP BY fr_name, en_name `;
            if (order && orderColumns.length > 0) {
                query += addOrderBy(orderColumns, order);
            }
            query += ` limit ${count} offset ${offset}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
}

module.exports = SaleRepository;
