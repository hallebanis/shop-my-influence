class ConversionService {
    /**
     *
     * @param {{
     * conversionDataSource:import('../data/ConversionDataSource')
     * }} input
     */
    constructor(input) {
        this.conversionDataSource = input?.conversionDataSource;
    }
    async getAll(startDate, endDate) {
        return new Promise(async (resolve, reject) => {
            try {
                const response =
                    await this.conversionDataSource.productSellCount(
                        startDate,
                        endDate
                    );
                resolve(response);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }
}

module.exports = ConversionService;
