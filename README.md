# Web Pengolaan Jadwal Kuliah

## Configurasi Project

1. **Clone repo**

   ```bash
   git clone https://github.com/mfarzz/Kelompok14
   ```

2. **Cd ke folder project**

   ```bash
   cd Web Pengolaan Jadwal Kuliah
   ```

3. **Install semua depedensi yang diperlukan**

   ```bash
   npm install
   ```

4. **Hidupkan MySQL XAMPP dan buat database & setting koneksi db pada config/config.json**

   ```bash
   "development": {
    "username": "root",
    "password": null,
    "database": "pweb",
    "host": "localhost",
    "dialect": "mysql"
   }
   ```

5. **Lakukan migrasi tabel dari express ke database**

   ```bash
   npx sequelize-cli db:migrate
   ```

6. **Jalankan seeder untuk mengirim data ke database**

   ```bash
   npx sequelize-cli db:seed:all
   ```

7. **Jalankan Express dengan perintah**

   ```bash
   npm run start
   ```

8. **Untuk push perubahan silahkan buatlah branch baru terlebih dahulu**

   ```bash
   git branch (namaBranch)//buat branch baru
   git checkout namaBranch
   git add .
   git commit -m "pesan"
   git push -u origin namaBranch
   ```