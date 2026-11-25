var daftar = document.getElementById("daftar");
var inputCari = document.getElementById("cari");
var pesan = document.getElementById("pesan");
var jumlah = document.getElementById("jumlah");
// menampilkan alumni ke halaman
function tampilkan(data) {
    daftar.innerHTML = "";
for (var i = 0; i < data.length; i++) {
daftar.innerHTML +=
'<div class="profil">' +
"<h3>" + data[i].nama + "</h3>" +
"<p>Jurusan: " + data[i].jurusan + "</p>" +
"<p>Angkatan: " + data[i].angkatan + "</p>" +
"</div>";
}
jumlah.textContent = "Menampilkan " + data.length + " alumni";
pesan.style.display = data.length === 0 ? "block" : "none";
}
// memfilter alumni berdasarkan nama atau jurusan
inputCari.addEventListener("keyup", function () {
var kataKunci = inputCari.value.toLowerCase();
var hasil = dataAlumni.filter(function (a) {
return a.nama.toLowerCase().includes(kataKunci) ||
a.jurusan.toLowerCase().includes(kataKunci);
});
tampilkan(hasil);
});