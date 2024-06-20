const { Model, Op, where } = require('sequelize');
const { Matkul, prodi, Dosen, Perkuliahan, detailperkuliahan } = require('../models');

const getProdi = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(401).send('Unauthorized');
        }

        res.render('berandaJurusan',  { userProdi, userEmail: req.session.userId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

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
        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(400).send('Kode prodi tidak valid');
        }

        const kode_prodi = userProdi.kode_prodi;
        await Matkul.create({
            kode_matkul,
            kode_prodi,
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
    const { kode_matkul2, nama_matkul2, semester2, tahun_ajaran2 } = req.body;
    const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
    try {
        await Matkul.update(
            { nama_matkul: nama_matkul2, semester: semester2, tahun_ajaran: tahun_ajaran2 },
            { where: { kode_matkul: kode_matkul2, kode_prodi: userProdi.kode_prodi } }
        );
        res.redirect('/prodi/matakuliah');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const deleteMatkul = async (req, res) => {
    try {
        const hapus = await Matkul.findByPk(req.params.kode_matkul);
        await hapus.destroy();
        res.redirect('/prodi/matakuliah');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};


const getAllDosen = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(401).send('Unauthorized');
        }

        const dosens = await Dosen.findAll({ where: { kode_prodi: userProdi.kode_prodi } });
        res.render('jurusanDosen', { dosens, userEmail: req.session.userId });

    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const createDosen = async (req, res) => {
    const { nip_dosen, nama_dosen, pendidikan_terakhr, jabatan } = req.body;

    try {
        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(400).send('Kode prodi tidak valid');
        }

        const kode_prodi = userProdi.kode_prodi;
        await Dosen.create({
            nip_dosen,
            kode_prodi,
            nama_dosen,
            pendidikan_terakhr,
            jabatan
        });
        res.redirect('/prodi/dosen');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const updateDosen = async (req, res) => {
    const { nip_dosen2, pendidikan_terakhr2, jabatan2 } = req.body;
    const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
    try {
        await Dosen.update(
            { pendidikan_terakhr: pendidikan_terakhr2, jabatan: jabatan2 },
            { where: { nip_dosen: nip_dosen2, kode_prodi: userProdi.kode_prodi } }
        );
        res.redirect('/prodi/dosen');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const deleteDosen = async (req, res) => {
    try {
        const hapus = await Dosen.findByPk(req.params.nip_dosen);
        await hapus.destroy();
        res.redirect('/prodi/dosen');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const getAllPerkuliahan = async(req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).send('Unauthorized');
        }

        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(401).send('Unauthorized');
        }

        const matkuls = await Matkul.findAll({ where: { kode_prodi: userProdi.kode_prodi } });
        const dosens = await Dosen.findAll({ where: { kode_prodi: userProdi.kode_prodi } });
        const perkuliahans = await Perkuliahan.findAll({
            include: [
                {
                    model: detailperkuliahan,
                    include: [
                        {
                            model: Dosen,
                            attributes: ['nama_dosen']
                        }
                    ]
                },
                {
                    model: Matkul,
                    where: { kode_prodi: userProdi.kode_prodi }
                }
            ]
        });

        res.render('jurusanPerkuliahan', { perkuliahans, matkuls, dosens, userEmail: req.session.userId });

    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const createPerkuliahan = async (req, res) => {
    const { kode_perkuliahan, kode_matkul, nama_kelas, jadwal_kuliah, ruang_kuliah, kuota, nip_dosen1, nip_dosen2} = req.body;
    try {
        const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(400).send('Kode prodi tidak valid');
        }

        const kodeProdi = userProdi.kode_prodi; // Assign kode_prodi to a variable

        const matkuls = await Matkul.findOne({ where: { kode_matkul: kode_matkul, kode_prodi: kodeProdi } });
        if (!matkuls) {
            return res.status(400).send('Kode matkul tidak valid');
        }

        const validDosens = [];
        const detailPerkuliahanData = [];

        if (nip_dosen1) {
            const validDosen1 = await Dosen.findOne({
                where: {
                    nip_dosen: nip_dosen1,
                    kode_prodi: kodeProdi
                }
            });

            if (validDosen1) {
                validDosens.push(validDosen1);
                detailPerkuliahanData.push({
                    nip_dosen: nip_dosen1,
                    kode_perkuliahan: kode_perkuliahan
                });
            } else {
                return res.status(400).send('NIP dosen 1 tidak valid');
            }
        }

        if (nip_dosen2) {
            const validDosen2 = await Dosen.findOne({
                where: {
                    nip_dosen: nip_dosen2,
                    kode_prodi: kodeProdi
                }
            });

            if (validDosen2) {
                validDosens.push(validDosen2);
                detailPerkuliahanData.push({
                    nip_dosen: nip_dosen2,
                    kode_perkuliahan: kode_perkuliahan
                });
            } else {
                return res.status(400).send('NIP dosen 2 tidak valid');
            }
        }

        if (validDosens.length === 0) {
            return res.status(400).send('Minimal satu dosen harus dipilih');
        }

        await Perkuliahan.create({
            kode_perkuliahan,
            kode_matkul: matkuls.kode_matkul,
            nama_kelas,
            jadwal_kuliah,
            ruang_kuliah,
            kuota,
        });

        await detailperkuliahan.bulkCreate(detailPerkuliahanData);

        res.redirect('/prodi/perkuliahan');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const updatePerkuliahan = async (req, res) => {
    const { kode_perkuliahan2, nama_kelas2, jadwal_kuliah2, ruang_kuliah2, kuota2, nip_dosen3, nip_dosen4 } = req.body;
    const userProdi = await prodi.findOne({ where: { email_prodi: req.session.userId } });
        if (!userProdi) {
            return res.status(400).send('Kode prodi tidak valid');
        }

    const kodeProdi = userProdi.kode_prodi;
    
    const validDosens = [];
    const detailPerkuliahanData = [];

    if (nip_dosen3) {
        const validDosen3 = await Dosen.findOne({
            where: {
                nip_dosen: nip_dosen3,
                kode_prodi: kodeProdi
            }
        });

        if (validDosen3) {
            validDosens.push(validDosen3);
            detailPerkuliahanData.push({
                nip_dosen: nip_dosen3,
                kode_perkuliahan: kode_perkuliahan2
            });
        } else {
            return res.status(400).send('NIP dosen 1 tidak valid');
        }
    }

    if (nip_dosen4) {
        const validDosen4 = await Dosen.findOne({
            where: {
                nip_dosen: nip_dosen4,
                kode_prodi: kodeProdi
            }
        });

        if (validDosen4) {
            validDosens.push(validDosen4);
            detailPerkuliahanData.push({
                nip_dosen: nip_dosen4,
                kode_perkuliahan: kode_perkuliahan2
            });
        } else {
            return res.status(400).send('NIP dosen 2 tidak valid');
        }
    }

    if (validDosens.length === 0) {
        return res.status(400).send('Minimal satu dosen harus dipilih');
    }

    try {
        await Perkuliahan.update(
            { nama_kelas: nama_kelas2, jadwal_kuliah: jadwal_kuliah2, ruang_kuliah: ruang_kuliah2, kuota: kuota2 },
            { where: { kode_perkuliahan: kode_perkuliahan2 } }
        );

        await detailperkuliahan.destroy({ where: { kode_perkuliahan: kode_perkuliahan2 } });
        await detailperkuliahan.bulkCreate(detailPerkuliahanData);
        
        res.redirect('/prodi/perkuliahan');

    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

const deletePerkuliahan = async (req, res) => {
    try {
        const hapus = await Perkuliahan.findByPk(req.params.kode_perkuliahan);
        await hapus.destroy();
        res.redirect('/prodi/perkuliahan');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

module.exports = {
    getProdi,
    getAllMatkul,
    createMatkul,
    updateMatkul,
    deleteMatkul,
    getAllDosen,
    createDosen,
    updateDosen,
    deleteDosen,
    getAllPerkuliahan,
    createPerkuliahan,
    updatePerkuliahan,
    deletePerkuliahan
};
