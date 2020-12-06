const Product = require('../database/models/productModel')
const { formatMongoData } = require('../helper/dbHelper');

module.exports.createProduct = async(serviceData) => {
    try {
        let product = new Product({...serviceData });
        let result = await product.save();
        // return result.toObject();
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong:service:createProduct', error);
        throw new Error(error);
    }
}
module.exports.getAllProducts = async(serviceData) => {
    try {
        let products = await Product.find({});
        return formatMongoData(products);
    } catch (error) {
        console.log('Something went wrong:service:getAllProducts', error);
        throw new Error(error);
    }
}