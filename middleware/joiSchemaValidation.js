const Joi = require('@hapi/joi');

const validateObjectSchema = async(data, schema) => {
    const result = await Joi.validate(data, schema, { convert: false });
    console.log(result);
    const errorDetails = result.error.details.map(value => {
        return {
            error: value.message,
            path: value.path,
        };
    });
    console.log('errorDetails  === ', errorDetails);
}


module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        // console.log(req.body);
        validateObjectSchema(req.body, schema);
    }
}