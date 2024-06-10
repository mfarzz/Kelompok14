const { Matkul, prodi } = require('../models');

const getAllMatkul = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(401).send('Unauthorized');
        }

        const matkuls = await Matkul.findAll({ where: { kode_prodi: userProdi.kode_prodi } });
        res.render('jurusanMataKuliah', { matkuls, userEmail: req.session.userId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};


const createMatkul = async (req, res) => {
    const { kode_matkul, nama_matkul, semester, tahun_ajaran } = req.body;
    try {
        await Matkul.create({
            kode_matkul,
            kode_prodi: req.session.userId,
            nama_matkul,
            semester,
            tahun_ajaran
        });
        res.redirect('/prodi/matakuliah');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const updateMatkul = async (req, res) => {
    const { kode_matkul, nama_matkul, semester, tahun_ajaran } = req.body;
    try {
        await Matkul.update(
            { nama_matkul, semester, tahun_ajaran },
            { where: { kode_matkul, kode_prodi: req.session.userId } }
        );
        res.redirect('/prodi/matakuliah');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const deleteMatkul = async (req, res) => {
    const { kode_matkul } = req.body;
    try {
        await Matkul.destroy({ where: { kode_matkul, kode_prodi: req.session.userId } });
        res.redirect('/prodi/matakuliah');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

module.exports = {
    getAllMatkul,
    createMatkul,
    updateMatkul,
    deleteMatkul,
};
