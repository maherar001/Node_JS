const { model } = require("mongoose");
const Project = require('../models/portfolio');


// project_index
const project_index = (req, res) => {
    Project.find().sort({ createdAt: -1})
    .then((result) =>{
        res.render('index', {title: 'All Projects', projects: result})
    })
    .catch((err) =>{
        console.log(err);
    })
};
// project_detail
const project_detail = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Project.findById(id)
    .then((result) => {
        res.render('details', {projects: result, title: "Project Details" });
    })
    .catch((err) => {
        res.status(404).render('404', {title: 'Error 404'}); 
    })

};
// add_new_project_get
const add_new_project_get = (req, res) => {
    res.render('create', {title: 'New Project'});
};
// add_new_project_post
const add_new_project_post = (req, res) => {
    const project = new Project(req.body);
    console.log(req.body);
    project.save()
    .then ((result) =>  {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    })
};
// project_delete
const project_delete = (req, res) => {
    const id = req.params.id;

    Project.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/'})
    })
    .catch(err =>{
        console.log(err);
    })
};

module.exports = {
    project_index,
    project_detail,
    add_new_project_get,
    add_new_project_post,
    project_delete
}