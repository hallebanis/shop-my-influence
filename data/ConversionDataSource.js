class ConversionDataSource {
    /**
     *
     * @param {{
     * dbClient:import('pg').Client
     * }} input
     */
    constructor(input) {
        this.dbClient = input?.dbClient;
    }
    async getAllConversions() {
        try {
            const query = 'SELECT * FROM conversions';
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getAllConversions', error);
            throw error;
        }
    }
    async getTotalSales(startDate, endDate) {
        try {
            const query = `SELECT SUM(amount) AS CA,currency FROM conversions where createdat BETWEEN ${startDate} AND ${endDate} GROUP BY currency`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getSalesCount(startDate, endDate) {
        try {
            const query = `SELECT COUNT(key) AS sales_count FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async averageChart(startDate, endDate) {
        try {
            const query = `SELECT AVG(amount) AS average_chart FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async sibledCountryCount(startDate, endDate) {
        try {
            const query = `SELECT COUNT(DISTINCT countrycode) AS sibled_country_count FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async productSellCount(startDate, endDate) {
        try {
            const query = `SELECT COUNT(DISTINCT articleid) AS product_sells_count FROM conversions where createdat BETWEEN ${startDate} AND ${endDate}`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
}

module.exports = ConversionDataSource;
