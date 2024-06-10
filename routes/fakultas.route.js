var express = require("express");
var router = express.Router();
const fakultasController = require("../controller/fakultas.controller");
const prodiController = require("../controller/prodi.controller");
const perkuliahanController = require("../controller/perkuliahan.controller");
const kalenderController = require("../controller/kalender.controller");
const authController = require("../controller/auth.controlller");
const {
	isAuthenticated,
	isAuthorized,
} = require("../middleware/session.middleware");
const upload = require("../middleware/multer.middleware");

router.get("/", isAuthenticated, isAuthorized("fakultas"), async (req, res) => {
	const prodi = await prodiController.getProdi(req.session.userId);
	res.render("fakultasJurusan", { prodi });
});

router.post(
	"/tambah-prodi",
	isAuthenticated,
	isAuthorized("fakultas"),
	async (req, res) => {
		const newProdi = await prodiController.newProdi({
			kode_prodi: req.body.kode_prodi,
			kode_fakultas: req.session.userId,
			nama_prodi: req.body.nama_prodi,
			akreditasi: req.body.akreditasi,
			email_prodi: req.body.email_prodi,
			password_prodi: req.body.password_prodi,
		});
		res.redirect("/fakultas");
	}
);

router.post(
	"/edit-prodi",
	isAuthenticated,
	isAuthorized("fakultas"),
	async (req, res) => {
		const editedProdi = await prodiController.editProdi({
			kode_prodi: req.body.kode_prodi,
			nama_prodi: req.body.nama_prodi,
			akreditasi: req.body.akreditasi,
			email_prodi: req.body.email_prodi,
			password_prodi: req.body.password_prodi,
		});
		console.log(req.body);
		res.redirect("/fakultas");
	}
);

router.get(
	"/mata-kuliah",
	isAuthenticated,
	isAuthorized("fakultas"),
	async (req, res) => {
		const matkul = await fakultasController.getMataKuliah(req.session.userId);
		res.render("fakultasMataKuliah", { matkul });
	}
);

router.get(
	"/kalender-akademik",
	isAuthenticated,
	isAuthorized("fakultas"),
	async (req, res) => {
		const kalender = await kalenderController.getKalender(req.session.userId);
		res.render("fakultasKalenderAkademik", { kalender });
	}
);

router.get(
	"/perkuliahan",
	isAuthenticated,
	isAuthorized("fakultas"),
	async (req, res) => {
		const perkuliahan = await perkuliahanController.getPerkuliahan(
			req.session.userId
		);
		console.log(perkuliahan);
		res.render("fakultasPerkuliahan", { perkuliahan });
	}
);

router.post(
	"/tambah-kalender",
	isAuthenticated,
	isAuthorized("fakultas"),
	upload.single("file_kalender"),
	async (req, res) => {
		const newKalender = await kalenderController.newKalender({
			kode_kalender: req.body.kode_kalender,
			email: req.session.userId,
			file_kalender: req.file.originalname,
			tahun_ajaran: req.body.tahun_ajaran,
		});
		console.log(newKalender);
		res.redirect("/fakultas/kalender-akademik");
	}
);

router.post(
	"/edit-kalender",
	isAuthenticated,
	isAuthorized("fakultas"),
	upload.single("file_kalender"),
	async (req, res) => {
		const editedKalender = await kalenderController.editKalender({
			kode_kalender: req.body.kode_kalender,
			file_kalender: req.file.originalname,
			tahun_ajaran: req.body.tahun_ajaran,
		});
		console.log(editedKalender);
		res.redirect("/fakultas/kalender-akademik");
	}
);

module.exports = router;
