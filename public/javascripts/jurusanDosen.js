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
const nipDosenInput = document.querySelector('#nip_dosen2');
const namaDosenInput = document.querySelector('#nama_dosen2');
const pendidikanInput = document.querySelector('#pendidikan_terakhr2');
const jabatanInput = document.querySelector('#jabatan2');

addBtn2.forEach(btn => {
    btn.addEventListener('click', function (event) {

        const nip_dosen = this.dataset.nip;
        const nama_dosen = this.dataset.nama;
        const pendidikan_terakhr = this.dataset.pendidikan;
        const jabatan = this.dataset.jabatan;

        nipDosenInput.value = nip_dosen;
        namaDosenInput.value = nama_dosen;
        pendidikanInput.value = pendidikan_terakhr;
        jabatanInput.value = jabatan;
    
        popup2.style.display = 'block';
        overlay2.style.display = 'block';
    });
});
closeButton2.addEventListener('click', function () {
    popup2.style.display = 'none';
    overlay2.style.display = 'none';
});