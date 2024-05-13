const express = require('express');
const session = require('express-session');
var router = express.Router();
const moment = require('moment');

//import database
var connection = require('../library/database');

router.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

// Middleware untuk menetapkan userLoggedIn ke setiap permintaan
router.use((req, res, next) => {
    // Cek apakah userLoggedIn telah diset dalam sesi
    res.locals.userLoggedIn = req.session.userLoggedIn || false;
    res.locals.user = req.session.user;
    next();
});



router.get('/', function(req, res, next) {
    if (!req.session.userLoggedIn || !req.session.user) {
        // Redirect to login page if not logged in
        return res.redirect('/login');
    }
    // Query
    connection.query('SELECT * FROM kegiatan_akademik ORDER BY id_kegiatan ASC  ', function(err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('kegiatan_akademik/index', {
                data: ''
            });
        } else {
            // Render to view matkul index
            res.render('kegiatan_akademik/index', {
                data: rows
            });
        }
    });
});


router.post('/store', function(req, res, next) {
  
   
    let nama_kegiatan = req.body.nama_kegiatan;
    let errors = false;

    // Validation (you can add more validations as needed)
    if (!nama_kegiatan) {
        errors = true;
        req.flash('error', 'Harap isi semua kolom.');
        res.render('kegiatan_akademik', {
            nama_kegiatan: nama_kegiatan
           
        });
    }

    // If no errors
    if (!errors) {
        let formData = {
            nama_kegiatan: nama_kegiatan
        };

        // Insert query
        connection.query('INSERT INTO kegiatan_akademik SET ?', formData, function(err, result) {
            if (err) {
                req.flash('error', err);
                res.render('tahun_akademik/', {
                    tahun_akademik: formData.nama_kegiatan,
                    
                });
            } else {
                req.flash('success', 'Data berhasil disimpan.');
                res.redirect('/kegiatan-akademik');
            }
        });
    }
});


router.get('/delete/(:id)', function(req, res, next) {
    let id_kegiatan = req.params.id;

    connection.query('DELETE FROM kegiatan_akademik WHERE id_kegiatan = ?', id_kegiatan, function(err, result) {
        if (err) {
            req.flash('error', err);
            res.redirect('/kegiatan-akademik');
        } else {
            req.flash('success', 'Data berhasil dihapus.');
            res.redirect('/kegiatan-akademik');
        }
    });
});




module.exports = router;
