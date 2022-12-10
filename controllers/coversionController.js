class ConversionController {
    /**
     *
     * @param {{
     * saleService:import('../services/SaleService')
     * }} input
     */
    constructor(input) {
        this.saleService = input?.saleService;
    }
    async getAll(startDate, endDate) {
        try {
            const response = await this.saleService.getAll(startDate, endDate);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = ConversionController;
