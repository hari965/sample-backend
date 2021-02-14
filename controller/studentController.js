const studentService = require('../service/studentService');
const constants = require('../constants');

module.exports.createStudent = async(req, res) => {
    // console.log(req.body);
    let response = {...constants.defaultServerResponse };
    try {
        const responseFromService = await studentService.createStudent(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong : controller : createStudent', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}