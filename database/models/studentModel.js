const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    class: String,
    year: Number,
    section: String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

module.exports = mongoose.model('student', studentSchema);