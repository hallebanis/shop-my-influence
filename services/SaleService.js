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
    async fetchGlobalPerformanceData(startDate, endDate, sort, sortColumn) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = {
                    totalSales: undefined,
                    SalesCount: undefined,
                    avergaeCart: undefined,
                    sibledCountriesCount: undefined,
                    productSalesCount: undefined,
                };
                resolve(response);
            } catch (error) {
                console.error('SaleService.fetchGlobalPerformanceData', error);
                reject(error);
            }
        });
    }
}

module.exports = SaleService;
