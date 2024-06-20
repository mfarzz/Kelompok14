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

const nip_dosen1 = document.getElementById('nip_dosen1');
const nip_dosen2 = document.getElementById('nip_dosen2');
const btnTambahPerkuliahan = document.querySelector('.btn-tambah-perkuliahan');

nip_dosen1.addEventListener('change', () => {
    const selectedValue = nip_dosen1.value;
    const options = nip_dosen2.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
            options[i].disabled = true;
        } else {
            options[i].disabled = false;
        }
    }
});

nip_dosen2.addEventListener('change', () => {
    const selectedValue = nip_dosen2.value;
    const options = nip_dosen1.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
            options[i].disabled = true;
        } else {
            options[i].disabled = false;
        }
    }
});

const nip_dosen3 = document.getElementById('nip_dosen3');
const nip_dosen4 = document.getElementById('nip_dosen4');
const editBtn = document.querySelectorAll('.edit-btn');
const disabledOptions = {};

editBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        const dosen1 = this.dataset.dosen1;
        const dosen2 = this.dataset.dosen2;

        if (!disabledOptions[kodePerkuliahanInput]) {
                disabledOptions[kodePerkuliahanInput] = [];
        }

        if (dosen1) {
            nip_dosen3.value = dosen1;
            disableOption(nip_dosen4, dosen1, kodePerkuliahanInput);
        } else {
            nip_dosen3.value = '';
        }

        if (dosen2) {
            nip_dosen4.value = dosen2;
            disableOption(nip_dosen3, dosen2, kodePerkuliahanInput);
        } else {
            nip_dosen4.value = '';
        }

        nip_dosen3.addEventListener('change', () => {
            const selectedValue = nip_dosen3.value;
            const options = nip_dosen4.options;

            for (let i = 0; i < options.length; i++) {
                if (options[i].value === selectedValue) {
                    options[i].disabled = true;
                } else {
                    options[i].disabled = false;
                }
            }
        });

        nip_dosen4.addEventListener('change', () => {
            const selectedValue = nip_dosen4.value;
            const options = nip_dosen3.options;

            for (let i = 0; i < options.length; i++) {
                if (options[i].value === selectedValue) {
                    options[i].disabled = true;
                } else {
                    options[i].disabled = false;
                }
            }
        });
    });
});

const submitBtn = document.querySelector('.btn-edit-perkuliahan');
submitBtn.addEventListener('click', (event) => {
    if (nip_dosen3.value === '' && nip_dosen4.value === '') {
        event.preventDefault();
        alert('Pilih minimal satu dosen pengampu');
    }
});



function disableOption(selectElement, value, kodePerkuliahanInput) {
    const options = selectElement.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === value) {
            options[i].disabled = true;
            disabledOptions[kodePerkuliahanInput].push(value);
        }
    }
}

function enableOption(selectElement, kodePerkuliahanInput) {
    const options = selectElement.options;
    const disabledValues = disabledOptions[kodePerkuliahanInput] || [];
    for (let i = 0; i < options.length; i++) {
        if (disabledValues.includes(options[i].value)) {
            options[i].disabled = false;
        }
    }
    disabledOptions[kodePerkuliahanInput] = [];
}

window.addEventListener('load', function () {
    enableOption(nip_dosen3, '');
    enableOption(nip_dosen4, '');
});

const addBtn2 = document.querySelectorAll('.edit-btn');
const popup2 = document.querySelector('.popup2');
const overlay2 = document.querySelector('.overlay2');
const closeButton2 = document.querySelector('.close-button2');
const kodePerkuliahanInput = document.querySelector('#kode_perkuliahan2');
const kodeMatkulInput = document.querySelector('#kode_matkul2');
const namaKelasInput = document.querySelector('#nama_kelas2');
const nipDosen3Input = document.querySelector('#nip_dosen3');
const nipDosen4Input = document.querySelector('#nip_dosen4');
const kuotaInput = document.querySelector('#kuota2');
const jadwalKuliahInput = document.querySelector('#jadwal_kuliah2');
const ruangKuliahInput = document.querySelector('#ruang_kuliah2');

addBtn2.forEach(btn => {
    btn.addEventListener('click', function (event) {

        const kodePerkuliahan = this.dataset.kode;
        const kodeMatkul = this.dataset.matkul;
        const namaKelas = this.dataset.nama;
        const jadwalKuliah = this.dataset.jadwal;
        const ruangKuliah = this.dataset.ruang;
        const nipDosen3 = this.dataset.dosen1;
        const nipDosen4 = this.dataset.dosen2;
        const kuota = this.dataset.kuota;

        kodePerkuliahanInput.value = kodePerkuliahan;
        kodeMatkulInput.value = kodeMatkul;
        namaKelasInput.value = namaKelas;
        jadwalKuliahInput.value = jadwalKuliah;
        ruangKuliahInput.value = ruangKuliah;
        kuotaInput.value = kuota;
        nipDosen3Input.value = nipDosen3;
        nipDosen4Input.value = nipDosen4;

        popup2.style.display = 'block';
        overlay2.style.display = 'block';
    });
});
closeButton2.addEventListener('click', function () {
    popup2.style.display = 'none';
    overlay2.style.display = 'none';
});


