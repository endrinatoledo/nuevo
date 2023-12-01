const options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify API',
            description: 'API documentation using Swagger',
            version: '1.0.0',
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here',
        },
        servers: [{
            url: 'http://localhost:3010',
            description: 'Development server',
        }],
    },
};

module.exports = {
    options,
};