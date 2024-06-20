const { where } = require("sequelize");
const { fakultas, prodi, Matkul, Perkuliahan, detailperkuliahan, Dosen } = require("../models");

const getPerkuliahan = async (email) => {
	try {
		const perkuliahanData = await Perkuliahan.findAll({
			include: [
				{
					model: Matkul,
					include: [
						{
							model: prodi,
							include: [
								{
									model: fakultas,
								},
							],
							where: { kode_fakultas: email },
						},
					],
				},
				{
					model: detailperkuliahan,
					include: [
                        {
                            model: Dosen,
                            attributes: ['nama_dosen'],
							include: [
								{
									model: prodi,
									include: [
										{
											model: fakultas,
										},
									],
									where: { kode_fakultas: email },
								},
							],
                        }
                    ]
				}
			],
		});
		return perkuliahanData;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch perkuliahan.");
	}
};

module.exports = {
	getPerkuliahan,
};
