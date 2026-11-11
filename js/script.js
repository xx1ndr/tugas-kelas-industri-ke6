const kkm = 75;

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

const formNilai = document.querySelector("#formNilai");
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const pesan = document.querySelector("#pesan");
const nilaiRataRata = document.querySelector("#nilaiRataRata");
const nilaiPredikat = document.querySelector("#nilaiPredikat");
const nilaiStatus = document.querySelector("#nilaiStatus");

function kosongkanNilai() {
  nilaiRataRata.textContent = "belum dihitung";
  nilaiPredikat.textContent = "belum dihitung";
  nilaiStatus.textContent = "belum dihitung";

  [nilaiRataRata, nilaiPredikat, nilaiStatus].forEach((sel) => {
    sel.className = "teks-kosong";
  });
}

function kosongkanHasil() {
  kosongkanNilai();
  pesan.hidden = true;
  pesan.textContent = "";
}

function tampilkanPesan(teks) {
  kosongkanNilai();
  pesan.textContent = teks;
  pesan.hidden = false;
}

function angkaDari(input) {
  const teks = input.value.trim();
  if (teks === "") {
    return { kosong: true, angka: 0 };
  }
  return { kosong: false, angka: Number(teks) };
}

function tampilkanHasil(tugas, uts, uas) {
  const rata = hitungRataRata(tugas, uts, uas);
  const lulus = rata >= kkm;

  pesan.hidden = true;
  pesan.textContent = "";

  nilaiRataRata.textContent = rata.toFixed(2);
  nilaiRataRata.className = "";

  nilaiPredikat.textContent = predikat(rata);
  nilaiPredikat.className = "";

  nilaiStatus.textContent = lulus ? `Lulus KKM (KKM ${kkm})` : `Remedial (KKM ${kkm})`;
  nilaiStatus.className = lulus ? "teks-lulus" : "teks-remedial";
}

formNilai.addEventListener("submit", (event) => {
  event.preventDefault();

  const tugas = angkaDari(inputTugas);
  const uts = angkaDari(inputUts);
  const uas = angkaDari(inputUas);

  if (tugas.kosong || uts.kosong || uas.kosong) {
    tampilkanPesan("Isi ketiga nilai dulu ya: tugas, UTS, dan UAS.");
    const belumDiisi = [inputTugas, inputUts, inputUas].find((input) => input.value.trim() === "");
    if (belumDiisi) {
      belumDiisi.focus();
    }
    return;
  }

  const semuaNilai = [tugas.angka, uts.angka, uas.angka];

  if (semuaNilai.some((nilai) => Number.isNaN(nilai))) {
    tampilkanPesan("Nilai harus berupa angka, bukan huruf.");
    return;
  }

  if (semuaNilai.some((nilai) => nilai < 0 || nilai > 100)) {
    tampilkanPesan("Nilai harus di antara 0 sampai 100.");
    return;
  }

  tampilkanHasil(tugas.angka, uts.angka, uas.angka);
});

formNilai.addEventListener("reset", () => {
  kosongkanHasil();
  inputTugas.focus();
});

kosongkanHasil();
inputTugas.focus();
