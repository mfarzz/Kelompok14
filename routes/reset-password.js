const express = require('express');
const session = require('express-session');
var router = express.Router();

//import database
var connection = require('../library/database');


router.get('/', function(req, res, next) {
    const email = req.query.id;
    res.render('reset-password/update', {
        email: email,
        username: '',
        password_baru: '',
        c_password_baru: ''
    });
});


router.post('/update', function(req, res, next) {
    let email = req.body.email;
    let password_baru = req.body.password_baru;
    let c_password_baru = req.body.c_password_baru;
    let errors = false;

    // Validasi inputan email dan password
    // Misalnya, Anda dapat memeriksa apakah password dan konfirmasi password sama

    // If no errors
    if (!errors) {
        // Query untuk mendapatkan id_user berdasarkan email dari tabel mahasiswa
        connection.query('SELECT id_user FROM mahasiswa WHERE email = ?', [email], function(err, results) {
            if (err) {
                req.flash('error', err);
                res.render('reset-password/update', {
                    email: email,
                    password_baru: password_baru,
                    c_password_baru: c_password_baru
                });
            } else {
                if (results.length > 0) {
                    let id_user = results[0].id_user;

                    // Update query untuk mengupdate password di tabel user
                    connection.query('UPDATE user SET password = ? WHERE id_user = ?', [password_baru, id_user], function(err, result) {
                        if (err) {
                            req.flash('error', err);
                            res.render('reset-password/update', {
                                email: email,
                                password_baru: password_baru,
                                c_password_baru: c_password_baru
                            });
                        } else {
                            req.flash('success', 'Password berhasil diupdate.');
                            res.redirect('/login');
                        }
                    });
                } else {
                    req.flash('error', 'Email tidak ditemukan.');
                    res.render('reset-password/update', {
                        email: email,
                        password_baru: password_baru,
                        c_password_baru: c_password_baru
                    });
                }
            }
        });
    }
});



module.exports = router;
