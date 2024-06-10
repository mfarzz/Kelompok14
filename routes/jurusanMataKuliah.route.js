const express = require('express');
const router = express.Router();
const matkulController = require('../controller/jurusanMataKuliah.controller.js');
const { isAuthenticated, isAuthorized } = require('../middleware/session.middleware');

router.get('/', isAuthenticated, isAuthorized('prodi'), matkulController.getAllMatkul);
router.post('/', isAuthenticated, isAuthorized('prodi'), matkulController.createMatkul);
router.put('/:kode_matkul', isAuthenticated, isAuthorized('prodi'), matkulController.updateMatkul);
router.delete('/:kode_matkul', isAuthenticated, isAuthorized('prodi'), matkulController.deleteMatkul);

module.exports = router;