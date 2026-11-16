const tombol = document.getElementById("tombol-sapa");
const judul = document.querySelector("h1");

tombol.addEventListener("click", function() {
    judul.textContent = "Halo Dunia! Web Pertama Saya Hidup!";
    tombol.textContent = "Sudah Disapa!";
    tombol.style.backgroundColor = "#10b981"; // Berubah jadi hijau
});