
 const attributesResponse400 = {
    statusCode: { type: "number" },
    message: { type: "string" },
    details: { type: "object" },
};

 const attributesResponse500 = {
    statusCode: { type: "number" },
    message: { type: "string" },
     error: { type: "string" },
};

module.exports = {
    attributesResponse400,
    attributesResponse500
}