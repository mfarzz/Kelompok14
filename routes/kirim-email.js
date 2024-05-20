const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var router = express.Router();
const app = express();

// Middleware untuk mengurai body dari request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint untuk mengirim email
router.post('/', async (req, res) => {
    const { to, subject, text } = req.body;
    const resetPasswordLink = 'http://localhost:3000/reset-password';

    const { email } = req.body;

    // Konfigurasi transporter (pengirim email)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noreplypendaftaranprodiunand@gmail.com', // Masukkan email pengirim di sini
            pass: 'vosa iymm ojxe ehxy' // Masukkan password email pengirim di sini
        }
    });

    // Konfigurasi email yang akan dikirim
    const mailOptions = {
        from: 'noreplypendaftaranprodiunand@gmail.com', // Alamat email pengirim
        to: email,
        subject: 'Link Perubahan Password',
        html: `Silahkan klik <a href="${resetPasswordLink}?id=${email}">link ini</a> untuk rubah password.` // Menggunakan HTML untuk menampilkan tautan
    };

    try {
        // Mengirim email
        await transporter.sendMail(mailOptions);
        req.flash('success', 'Email Berhasil Terkirim, silahkan buka email anda sekarang.');
        res.render('/login');
        res.status(200).send('Email sent successfully!');
        

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending email.');
    }


    
});

router.get('/create', function (req, res, next) {
   
    //render ke view posts index
    res.render('reset-password/create', {
       email:''
    });

})


module.exports = router;