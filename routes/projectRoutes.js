const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

// All Projects
router.get('/', projectController.project_index);
router.get("/create", projectController.add_new_project_get);
router.post('/', projectController.add_new_project_post);
router.get('/:id', projectController.project_detail);
router.delete('/:id', projectController.project_delete);

module.exports = router;