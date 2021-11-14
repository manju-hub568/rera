const mongoose = require('mongoose');

const erera = new mongoose.Schema({
    _id: {
        type: String
    },

    ["Aggregate area(In sqmts) of recreational open space"]: {
        type: String
    },

    ["Are there any Promoter(Land Owner/ Investor) (as defined by MahaRERA Order) in the project ?"]:{
        type: String
    },

    ["Area(In sqmts)"]: {
        type: String
    },

	["Bank Name"]: {
		type: String
	},
    ["Block Number"]: {
        type: String
    },
    ["Boundaries East"]: {
        type: String
    },

    ["Boundaries North"]: {
        type: String
    },

    ["Boundaries North"]:{
        type: String
    },

    ["Boundaries South"]: {
        type: String
    },

	["Boundaries Wes"]: {
		type: String
	},
    ["Building Name"]: {
        type: String
    },
    ["Built-up-Area as per Approved FSI (In sqmts)"]: {
        type: String
    },

    ["Built-up-Area as per Proposed FSI (In sqmts) ( Proposed but not sanctioned) ( As soon as approved, should be immediately updated in Approved FSI)"]: {
        type: String
    },

    ["Description For Other Type Organization"]:{
        type: String
    },

    ["District"]: {
        type: String
    },

	["Division"]: {
		type: String
	},
    ["Do you have any Past Experience ?"]: {
        type: String
    },
    ["Extended Date of Completion"]: {
        type: String
    },

    ["Father Full Name"]: {
        type: String
    },

    ["House Number"]:{
        type: String
    },

    ["District"]: {
        type: String
    },

	["IFSC Code"]: {
		type: String
	},
    ["Information Type"]: {
        type: String
    },
    ["Land mark"]: {
        type: String
    },

    ["Last Name"]: {
        type: String
    },

    ["Litigations related to the project ?"]:{
        type: String
    },

    ["Locality"]: {
        type: String
    },

	["Name"]: {
		type: String
	},
    ["Office Number"]: {
        type: String
    },
    ["Organization Type"]: {
        type: String
    },

	["Pin Code"]: {
		type: String
	},
    ["Plot Bearing No / CTS no / Survey Number/Final Plot no"]: {
        type: String
    },
    ["Project Name"]: {
        type: String
    },

	["Project Status"]: {
		type: String
	},
    ["Project Type"]: {
        type: String
    },
    ["Proposed But Not Sanctioned Buildings Count"]: {
        type: String
    },

	["Proposed Date of Completion"]: {
		type: String
	},
    ["Revised Proposed Date of Completion"]: {
        type: String
    },
    ["Sanctioned Buildings Count"]: {
        type: String
    },

	["State/UT"]: {
		type: String
	},
    ["Street"]: {
        type: String
    },
    ["Street Name"]: {
        type: String
    },

	["Taluka"]: {
		type: String
	},
    ["Total Building Count"]: {
        type: String
    },
    ["TotalFSI"]: {
        type: String
    },

	["Village"]: {
		type: String
	},
    ["Website URL"]: {
        type: String
    },
});


const Rera = new mongoose.model('rera', erera);

module.exports = Rera;