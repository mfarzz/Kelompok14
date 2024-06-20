var express = require('express');
var router = express.Router();
const { isAuthenticated, isAuthorized, sessionChecker} = require('../middleware/session.middleware')
const jurusanController = require('../controller/jurusan.controller.js');
const upload = require('../middleware/multer.middleware.js');


router.get('/',isAuthenticated,isAuthorized('prodi'),sessionChecker, jurusanController.getProdi);

router.get('/matakuliah', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.getAllMatkul);
router.post('/matakuliah/create', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.createMatkul);
router.post('/matakuliah/update-matkul', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.updateMatkul);
router.post('/matakuliah/delete-matkul/:kode_matkul', isAuthenticated, isAuthorized('prodi'), sessionChecker,  jurusanController.deleteMatkul);

router.get('/dosen', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.getAllDosen);
router.post('/dosen/create', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.createDosen);
router.post('/dosen/update-dosen', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.updateDosen);
router.post('/dosen/delete-dosen/:nip_dosen', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.deleteDosen);

router.get('/perkuliahan', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.getAllPerkuliahan);
router.post('/perkuliahan/create', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.createPerkuliahan);
router.post('/perkuliahan/update-perkuliahan', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.updatePerkuliahan);
router.post('/perkuliahan/delete-perkuliahan/:kode_perkuliahan', isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.deletePerkuliahan);

router.post('/upload-profile-picture', upload.single('profilePicture'),isAuthenticated, isAuthorized('prodi'), sessionChecker, jurusanController.uploadProfilePicture);

module.exports = router;
