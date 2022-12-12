class Constants {
    constructor() {
        this.swaggerOptions = Object.freeze({
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Library API',
                    version: '1.0.0',
                    description: 'A simple Express Library API',
                    termsOfService: 'http://example.com/terms/',
                    contact: {
                        name: 'API Support',
                        url: 'http://www.exmaple.com/support',
                        email: 'support@example.com',
                    },
                },

                servers: [
                    {
                        url: 'http://localhost:4000',
                        description: 'local My API Documentation',
                    },
                    {
                        url: 'https://shop-my-influence.onrender.com/',
                        description: 'online My API Documentation',
                    },
                ],
            },
            apis: ['./routes/*.js', 'index.js', './docs/*.js'],
        });
        this.days = Object.freeze({
            sunday: 0,
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6,
        });
        this.dayPeriod = Object.freeze({
            morning: { start: 6, end: 12 },
            afterNoon: { start: 12, end: 17 },
            evening: { start: 17, end: 20 },
            night: { start: 20, end: 6 },
        });
    }
}
module.exports = Constants;
