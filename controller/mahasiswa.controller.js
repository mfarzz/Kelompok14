
const { User, mahasiswa } = require("../models/index");

const profil_mahasiswa = async (req,res)=>{

    const user = await User.findByPk(req.userId, {
        include: mahasiswa
    });
    res.render('user/home', { user });
}

module.exports ={
    profil_mahasiswa
}