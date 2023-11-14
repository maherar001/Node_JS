const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const portfolioSchema = new Schema({
    title : {
        type: String,
        required: true
    },

    description :{
        type: String,
        required: true
    },

    url : {
        work: mongoose.SchemaTypes.Url,
        required: true
    },

    gitRepository : {
        work: mongoose.SchemaTypes.Url,
        required: true
    }
    }, {timestamps: true});

    const Project = mongooes.model('Project', portfolioSchema );
    module.exports = Project;