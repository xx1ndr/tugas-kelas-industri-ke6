console.log("alloww, saya yura!");
console.log("Ini latihan JavaScript pertamaku.");

const nama = "Indra Yudhistira";
const kelas = "X RPL 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

function predikat(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}

function rapor(namaSiswa, tugas, uts, uas) {
  const rata = hitungRataRata(tugas, uts, uas);
  return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}

const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

if (lulus) {
  console.log("Selamat, kamu lulus KKM!");
} else {
  console.log("Tetap semangat, ikuti remedial ya.");
}

console.log(`predikat(95) = ${predikat(95)}`);
console.log(`predikat(90) = ${predikat(90)}`); 
console.log(`predikat(84) = ${predikat(84)}`);
console.log(`predikat(70) = ${predikat(70)}`);
console.log(`predikat(69) = ${predikat(69)}`);

console.log(rapor("Indra", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));

const btnBukaModal = document.querySelector("#btnKontak");
const elemenModal = document.querySelector("#modalkontak");
const btnTutupModal = document.querySelector("#btnTutupModal");

btnBukaModal.addEventListener("click", function (event) {
  event.preventDefault();
  elemenModal.classList.add("show");
});

btnTutupModal.addEventListener("click", function () {
  elemenModal.classList.remove("show");
});
