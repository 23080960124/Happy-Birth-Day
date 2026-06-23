const openBtn = document.getElementById("openBtn");
const content = document.getElementById("content");
const music = document.getElementById("music");
const gallery = document.getElementById("gallery");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const target = new Date("2026-07-09");
  const now = new Date();

  const diff = target - now;

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  countdown.textContent =
    `${days} hari lagi menuju hari spesial Mbak Riris ✨`;
}

updateCountdown();

const captions = {
  1: "Terima kasih sudah selalu ada.",
  2: "Rumah tidak selalu tentang tempat.",
  3: "Aku beruntung tumbuh bersamamu.",
  4: "Hari biasa yang menjadi kenangan.",
  5: "Terima kasih karena tidak pernah menyerah.",
  6: "Salah satu alasan aku percaya bahwa semuanya akan baik-baik saja.",
  7: "Senyum yang selalu berhasil menenangkan.",
  8: "Momen kecil yang ingin aku simpan lebih lama.:,
  9: "Aku bangga punya Mbak seperti kamu.",
  10: "Tempat pulang favoritku.",
  11: "Terima kasih sudah bertahan sejauh ini.",
  12: "Tidak semua pahlawan memakai jubah.",
  13: "Kadang aku lupa mengatakannya, tapi aku sangat bersyukur memilikimu.",
  14: "Kenangan sederhana yang selalu hangat.",
  15: "Bahagia terus ya, Mbak.",
  16: "Perempuan terkuat yang pernah aku kenal.",
  17: "Banyak hal berubah, tapi syukurlah kita masih di sini.",
  18: "Aku suka versi hidup yang ada Mbaknya.",
  19: "Terima kasih sudah menjadi kakak, teman, sekaligus keluarga.",
  20: "Salah satu foto favoritku, salah satu orang favoritku.",
  21: "Semoga dunia selalu memperlakukanmu dengan baik.",
  22: "Hari ini, besok, dan seterusnya, semoga bahagia selalu menyertaimu.",
  23: "Ada banyak hal yang tidak sempat aku ucapkan, tapi selalu aku rasakan.",
  24: "Tawa yang ingin aku dengar lebih sering.",
  25: "Semoga langkahmu selalu dipenuhi kemudahan.",
  26: "Aku tahu hidup tidak selalu mudah, tapi Mbak selalu berhasil melaluinya.",
  27: "Untuk semua lelah yang tidak pernah diceritakan.",
  28: "Untuk semua kuat yang tidak pernah diperlihatkan.",
  29: "Semoga lebih banyak hal baik menemukanmu.",
  30: "Semoga selalu dipertemukan dengan orang-orang baik.",
  31: "Aku akan selalu mendukung kebahagiaanmu.",
  32: "Sekarang giliran Mbak memikirkan kebahagiaan Mbak sendiri.",
  33: "Terima kasih sudah menjadi rumah bagi kami.",
  34: "Selamat ulang tahun, Mbak Riris. Kami sayang Mbak. 🤍",
};

for (let i = 1; i <= 34; i++) {

  const card = document.createElement("div");
  card.className = "photo-card";

  const rotate = Math.floor(Math.random() * 8) - 4;
  card.style.setProperty("--rotate", `${rotate}deg`);

  const img = document.createElement("img");
  img.src = `assets/images/foto${i}.jpeg`;

  const caption = document.createElement("p");
  caption.textContent = captions[i] || "🤍";

  card.appendChild(img);
  card.appendChild(caption);

  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalCaption.textContent = caption.textContent;
  });

  gallery.appendChild(card);
}

openBtn.addEventListener("click", async () => {

  content.classList.remove("hidden");

  await music.play().catch(() => {});

  confetti({
    particleCount: 180,
    spread: 120,
    origin: { y: 0.6 }
  });

  content.scrollIntoView({
    behavior: "smooth"
  });

  startTyping();
});

const message = `Untuk Mbak Riris,

Selamat ulang tahun, Mbak...

Terima kasih karena selama ini sudah menjadi banyak hal dalam hidup kami.

Setelah Ayah-Ibu pergi, mungkin hidup tidak berjalan mudah untukmu. Namun, entah bagaimana, kamu selalu berhasil membuat kami merasa semuanya akan baik-baik saja.

Kamu selalu berusaha menjadi sosok apa pun yang kami butuhkan.

Menjadi kakak, teman, tempat bercerita, penguat, bahkan menjadi orang tua bagi kami.

Aku tahu itu tidak mudah.

Aku tahu ada banyak lelah yang Kamu simpan sendiri.

Meski kita sering bertengkar, aku tahu rasa sayangmu lebih besar dari rasa jengkelmu itu.

Aku tidak pernah meragukan satu hal: Kamu adalah salah satu orang terkuat yang pernah aku kenal.

Sekarang, aku hanya ingin Kamu tahu bahwa Mbak Riris tidak harus selalu kuat.

Tidak apa-apa jika sesekali bersandar.

Aku berharap Kamu dipertemukan dengan seseorang yang bisa menjadi tempat pulang dan sandaran, seperti selama ini Kamu menjadi sandaran bagi banyak orang.

Semoga Mbak Riris selalu sehat.

Semoga rezeki Mbak Riris dilimpahkan.

Semoga usaha dan impian Mbak Riris dimudahkan.

Semoga langkah Mbak Riris selalu didekatkan dengan jalan kebaikan.

Dan semoga, mulai hari ini dan seterusnya, lebih banyak hal baik yang datang kepada Mbak Riris.

Terima kasih karena sudah menjadi Mbak Riris.

Kami sayang Mbak Riris. 🤍`;

const typedText = document.getElementById("typedText");

function startTyping() {

  let i = 0;

  const typing = setInterval(() => {

    typedText.textContent += message.charAt(i);

    i++;

    if (i >= message.length) {
      clearInterval(typing);
    }

  }, 30);
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
