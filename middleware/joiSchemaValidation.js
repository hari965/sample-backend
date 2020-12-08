// const Joi = require('@hapi/joi');
// const constants = require('../constants')

// const validateObjectSchema = async(data, schema) => {
//     const result = await Joi.validate(data, schema, { convert: false });
//     console.log(result);
//     if (result.error) {
//         const errorDetails = result.error.details.map(value => {
//             return {
//                 error: value.message,
//                 path: value.path
//             };
//         });
//         return errorDetails;
//     }

//     return null;
// }


// module.exports.validateBody = (schema) => {
//     return (req, res, next) => {
//         console.log(req.body);
//         let response = {...constants.defaultServerResponse }
//         const error = validateObjectSchema(req.body, schema);
//         if (error) {
//             response.body = error;
//             response.message = constants.requestValidaionMessage.BAD_REQUEST;
//             return res.status(response.status).send(response);

//         } else {
//             return next();
//         }
//     }
// }


// module.exports.validateQueryParams = (schema) => {
//     return (req, res, next) => {
//         console.log(req.body);
//         let response = {...constants.defaultServerResponse }
//         const error = validateObjectSchema(req.query, schema);
//         if (error) {
//             response.body = error;
//             response.message = constants.requestValidaionMessage.BAD_REQUEST;
//             return res.status(response.status).send(response);

//         } else {
//             return next();
//         }
//     }
// }