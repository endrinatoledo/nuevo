const generalTypes = require('./general.types');

const userCreateRequest = {
    use_name: { type: "string" },
    use_email: { type: "string" },
    use_status: { type: "number" },
};

const userResponse200 = {
    use_id: { type: "number" },
    ...userCreateRequest
};

const userUpdateRequest = {
    ...userCreateRequest
};

const schemaCreateUser = {
    schema: {
        description:
            "Creación de nuevo usuario",
        tags: ["Create new user"],
        summary:
            "Endpoint that allows creating a new user",
        body: {
            type: "object",
            properties: {
                use_name: {
                    type: "string",
                    description: "Nombre del usuario",
                },
                use_email: {
                    type: "string",
                    description: "Email del usuario"
                },
                use_status: {
                    type: "string",
                    description: "Estatus del usuario"
                }
            },
        },
        response: {
            200: {
                description: "¡Success!",
                type: "object",
                properties: {
                    statusCode: { type: "number" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        items: {
                            type: "object",
                            properties: userResponse200,
                        },
                    },
                },
            },
            400:
            {
                description: "¡Bad Request!",
                type: "object",
                properties: generalTypes.attributesResponse400,
            },
            500: {
                description: "¡Internal Server Error!",
                type: "object",
                properties: generalTypes.attributesResponse500,
            },
        },
    }
}

module.exports = {
    userCreateRequest,
    userResponse200,
    userUpdateRequest,
    schemaCreateUser
}