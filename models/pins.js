const mongoose = require('mongoose');

const epin = new mongoose.Schema({
    ["Pin Code"]: {
        type: String
    },

});


const Pin = new mongoose.model('pin', epin);

module.exports = Pin;