const mongoose = require('mongoose');

const erera = new mongoose.Schema({
    ["Project name"]: {
        type: String
    },

    ["Project type"]: {
        type: String
    },

    ["State/UT"]:{
        type: String
    },

    ["District"]: {
        type: String
    },

	["Locality"]: {
		type: String
	}

});


const Rera = new mongoose.model('rera', erera);

module.exports = Rera;