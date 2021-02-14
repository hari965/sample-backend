const Student = require('../database/models/studentModel')
const { formatMongoData, checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');
const mongoose = require('mongoose');

module.exports.createStudent = async(serviceData) => {
    try {
        let student = new Student({...serviceData });
        let result = await student.save();
        // return result.toObject();
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong:service:createProduct', error);
        throw new Error(error);
    }
}