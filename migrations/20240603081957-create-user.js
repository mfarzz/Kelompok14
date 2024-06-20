'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fakultas', {
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      nama_fakultas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_fakultas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('prodis', {
      kode_prodi: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      kode_fakultas: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'fakultas',
          key: 'email',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      akreditasi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('kalenders', {
      kode_kalender: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'fakultas',
          key: 'email',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      file_kalender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('pemberitahuans', {
      kode_pemberitahuan: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'fakultas',
          key: 'email',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      judul_pemberitahun: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('matkuls', {
      kode_matkul: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      kode_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'prodis',
          key: 'kode_prodi',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_matkul: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      semester: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('dosens', {
      nip_dosen: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      kode_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'prodis',
          key: 'kode_prodi',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_dosen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pendidikan_terakhr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jabatan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('perkuliahans', {
      kode_perkuliahan: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      kode_matkul: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'matkuls',
          key: 'kode_matkul',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      jadwal_kuliah: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ruang_kuliah: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nama_kelas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kuota: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    await queryInterface.createTable('detailperkuliahans', {
      nip_dosen: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'dosens',
          key: 'nip_dosen',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      kode_perkuliahan: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'perkuliahans',
          key: 'kode_perkuliahan',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detailperkuliahans');
    await queryInterface.dropTable('perkuliahans');
    await queryInterface.dropTable('dosens');
    await queryInterface.dropTable('matkuls');
    await queryInterface.dropTable('pemberitahuans');
    await queryInterface.dropTable('kalenders');
    await queryInterface.dropTable('prodis');
    await queryInterface.dropTable('fakultas');
  }
};