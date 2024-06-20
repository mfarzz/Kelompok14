const addBtn = document.querySelector('.add-btn');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');

addBtn.addEventListener('click', function () {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

const addBtn2 = document.querySelectorAll('.edit-btn');
const popup2 = document.querySelector('.popup2');
const overlay2 = document.querySelector('.overlay2');
const closeButton2 = document.querySelector('.close-button2');
    const kodeMatkulInput = document.querySelector('#kode_matkul2');
    const namaMatkulInput = document.querySelector('#nama_matkul2');
    const semesterInput = document.querySelector('#semester2');
    const tahunAjaranInput = document.querySelector('#tahun_ajaran2');



addBtn2.forEach(btn => {
    btn.addEventListener('click', function (event) {

        const kodeMatkul = this.dataset.kode;
        const nama_matkul = this.dataset.nama;
        const semester = this.dataset.semester;
        const tahun_ajaran = this.dataset.ta;

        kodeMatkulInput.value = kodeMatkul;
        namaMatkulInput.value = nama_matkul;
        semesterInput.value = semester;
        tahunAjaranInput.value = tahun_ajaran;

        popup2.style.display = 'block';
        overlay2.style.display = 'block';
    });
});

closeButton2.addEventListener('click', function () {
    popup2.style.display = 'none';
    overlay2.style.display = 'none';
});