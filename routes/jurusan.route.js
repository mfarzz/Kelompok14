var express = require('express');
var router = express.Router();
const { isAuthenticated, isAuthorized} = require('../middleware/session.middleware')
const jurusanController = require('../controller/jurusan.js');

router.get('/',isAuthenticated,isAuthorized('prodi'), jurusanController.getProdi);

router.get('/matakuliah', isAuthenticated, isAuthorized('prodi'), jurusanController.getAllMatkul);
router.post('/matakuliah/create', isAuthenticated, isAuthorized('prodi'), jurusanController.createMatkul);
router.post('/matakuliah/update-matkul', isAuthenticated, isAuthorized('prodi'), jurusanController.updateMatkul);
router.post('/matakuliah/delete-matkul/:kode_matkul', isAuthenticated, isAuthorized('prodi'), jurusanController.deleteMatkul);

router.get('/dosen', isAuthenticated, isAuthorized('prodi'), jurusanController.getAllDosen);
router.post('/dosen/create', isAuthenticated, isAuthorized('prodi'), jurusanController.createDosen);
router.post('/dosen/update-dosen', isAuthenticated, isAuthorized('prodi'), jurusanController.updateDosen);
router.post('/dosen/delete-dosen/:nip_dosen', isAuthenticated, isAuthorized('prodi'), jurusanController.deleteDosen);

router.get('/perkuliahan', isAuthenticated, isAuthorized('prodi'), jurusanController.getAllPerkuliahan);
router.post('/perkuliahan/create', isAuthenticated, isAuthorized('prodi'), jurusanController.createPerkuliahan);
router.post('/perkuliahan/update-perkuliahan', isAuthenticated, isAuthorized('prodi'), jurusanController.updatePerkuliahan);
router.post('/perkuliahan/delete-perkuliahan/:kode_perkuliahan', isAuthenticated, isAuthorized('prodi'), jurusanController.deletePerkuliahan);



module.exports = router;
