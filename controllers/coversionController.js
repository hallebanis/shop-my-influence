class ConversionController {
    /**
     *
     * @param {{
     * conversionService:import('../services/ConversionService')
     * }} input
     */
    constructor(input) {
        this.conversionService = input?.conversionService;
    }
    async getAll(startDate, endDate) {
        try {
            const response = await this.conversionService.getAll(
                startDate,
                endDate
            );
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = ConversionController;
