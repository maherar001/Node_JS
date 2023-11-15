const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    project_url : {
        type: String,
        required: true
    },
    gitRepository : {
        type: String,
        required: true
    }
    }, {timestamps: true});

    const Project = mongoose.model('Project', portfolioSchema );

    module.exports = Project;