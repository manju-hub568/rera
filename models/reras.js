const mongoose = require('mongoose');

const erera = new mongoose.Schema({
    _id: {
        type: String
    },
    Aggregate_area_In_sqmts_of_recreational_open_space: {
        type: String
    },
    Are_there_any_Promoter_Land_Owner_or_Investor_as_defined_by_MahaRERA_Order_in_the_project_question: {
        type: String
    },
    Area_In_sqmts: {
        type: String
    },
    Bank_Name: {
        type: String
    },
    Block_Number: {
        type: String
    },
    Boundaries_East: {
        type: String
    },
    Boundaries_North: {
        type: String
    },
    Boundaries_South: {
        type: String
    },
    Boundaries_West: {
        type: String
    },
    Building_Name: {
        type: String
    },
    Built_up_Area_as_per_Approved_FSI_In_sqmts: {
        type: String
    },
    Built_up_Built_up_Area_as_per_Proposed_FSI_In_sqmts_Proposed_but_not_sanctioned_approved_should_be_immediately_updated_in_Approved_FSI: {
        type: String
    },
    Description_For_Other_Type_Organization: {
        type: String
    },
    District: {
        type: String
    },
    Division: {
        type: String
    },
    Do_you_have_any_Past_Experience_ques: {
        type: String
    },
    Extended_Date_of_Completion: {
        type: String
    },
    Father_Full_Name: {
        type: String
    },
    House_Number: {
        type: String
    },
    IFSC_Code: {
        type: String
    },
    Information_Type: {
        type: String
    },
    Land_mark: {
        type: String
    },
    Last_Name: {
        type: String
    },
    Litigations_related_to_the_project_Ques: {
        type: String
    },
    Locality: {
        type: String
    },
    Name: {
        type: String
    },
    Office_Number: {
        type: String
    },
    Organization_Type: {
        type: String
    },
    Pin_Code: {
        type: String
    },
    ["Plot_Bearing_No_or_CTS_no_or_Survey_Number_or_Final_Plot_no."]: {
        type: String
    },
    Project_Name: {
        type: String
    },
    Project_Status: {
        type: String
    },
    Project_Type: {
        type: String
    },
    Proposed_But_Not_Sanctioned_Buildings_Count: {
        type: String
    },
    Proposed_Date_of_Completion: {
        type: String
    },
    Revised_Proposed_Date_of_Completion: {
        type: String
    },
    Sanctioned_Buildings_Count: {
        type: String
    },
    State_or_UT: {
        type: String
    },
    Street: {
        type: String
    },
    Street_Name: {
        type: String
    },
    Taluka: {
        type: String
    },
    Total_Building_Count: {
        type: String
    },
    TotalFSI: {
        type: String
    },
    Village: {
        type: String
    },
    Website_URL: {
        type: String
    },
});

const Rera = new mongoose.model('rera', erera);
module.exports = Rera;
