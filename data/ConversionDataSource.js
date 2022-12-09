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
    async getBestSellsDevice(startDate, endDate) {
        try {
            const query = `SELECT COUNT(devisetype) AS best_sell_device, devisetype FROM conversions where createdat BETWEEN ${startDate} AND ${endDate} GROUP BY devisetype order by best_sell_device DESC`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getBestSellsColor(startDate, endDate) {
        try {
            const query = `SELECT COUNT(maincolor) AS best_sell_color,fr_name maincolor FROM conversions  RIGHT JOIN colors on colors.key=conversions.maincolor WHERE maincolor <> 'NULL' AND createdat BETWEEN ${startDate} AND ${endDate} GROUP BY maincolor,colors.fr_name order by best_sell_color DESC `;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getBestSellsCategory(startDate, endDate) {
        try {
            const query = `SELECT COUNT(categ) AS best_sell_category,fr_name, en_name FROM conversions  RIGHT JOIN categories on categories.key=conversions.categ WHERE categ <> 'NULL' AND createdat BETWEEN ${startDate} AND ${endDate} GROUP BY categ,categories.fr_name order by best_sell_category DESC `;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getBestSellsDay(startDate, endDate) {
        try {
            const query = ` select COUNT(extract(dow from TO_TIMESTAMP(createdat))-1 ) as count,extract(dow from TO_TIMESTAMP(createdat)) as day from conversions WHERE createdat BETWEEN ${startDate} AND ${endDate} group by day order by count DESC`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getSellsHours(startDate, endDate) {
        try {
            const query = ` SELECT COUNT(extract(hour from TO_TIMESTAMP(createdat))-1 ) as count,extract(hour from TO_TIMESTAMP(createdat)) as hour from conversions WHERE createdat BETWEEN ${startDate} AND ${endDate} group by hour`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getBestSellsCountry(startDate, endDate) {
        try {
            const query = `select SUM(amount) as total,countrycode from conversions WHERE createdat BETWEEN ${startDate} AND ${endDate} group by countrycode order by total desc limit 1`;
            const result = await this.dbClient.query(query);
            return result.rows;
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
    async getBestSellsInfluencer(startDate, endDate) {
        try {
            const query = `SELECT SUM(amount) AS total,name, img FROM conversions  RIGHT JOIN influencers on influencers.key=conversions.influencer WHERE conversions.createdat BETWEEN ${startDate} AND ${endDate} GROUP BY name,img order by total DESC limit 1`;
            const result = await this.dbClient.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('getTotalSales', error);
            throw error;
        }
    }
}

module.exports = ConversionDataSource;
