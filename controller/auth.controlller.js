const bcrypt = require("bcrypt");
const { fakultas, prodi } = require("../models");

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await fakultas.findOne({ where: { email } });
		if (user) {
			const isMatch = await bcrypt.compare(password, user.password_fakultas);
			if (isMatch) {
				req.session.userId = user.email;
				req.session.role = user.role;
				return res.redirect("/fakultas");
			}
		}

		user = await prodi.findOne({ where: { email_prodi: email } });
		if (user) {
			const isMatch = await bcrypt.compare(password, user.password_prodi);
			if (isMatch) {
				req.session.userId = user.email_prodi;
				req.session.role = user.role;
				return res.redirect("/prodi");
			}
		}

		res.status(401).send("Email atau password salah");
	} catch (error) {
		console.error(error);
		res.status(500).send("Terjadi kesalahan pada server");
	}
};

const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};

const logout = async (req, res) => {
	req.session.destroy();
	res.redirect("/login");
};

const changePassword = async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await fakultas.findOne({ where: { email } });
		if (user) {
			const hashedPassword = await bcrypt.hash(password, 10);
			await fakultas.update(
				{ password_fakultas: hashedPassword },
				{ where: { email } }
			);

			return res.redirect("/login");
		}

		user = await prodi.findOne({ where: { email_prodi: email } });
		if (user) {
			if (user) {
				const hashedPassword = await bcrypt.hash(password, 10);

				await prodi.update(
					{ password_prodi: hashedPassword },
					{ where: { email } }
				);

				return res.redirect("/login");
			}
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Terjadi kesalahan pada server");
	}
};

module.exports = {
	login,
	logout,
	hashPassword,
	changePassword,
};
