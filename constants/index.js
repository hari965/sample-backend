module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found',
        PRODUCT_UPDATED_SUCCESSFULLY: 'Product Updated Successfully',
        PRODUCT_DELETED: 'Product deleted successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Login Successful',
        DUPLICATE_USER: 'User Already Exists With the Given Email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password'
    },
    requestValidaionMessage: {
        BAD_REQUEST: 'INVALID FIELDS '
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}