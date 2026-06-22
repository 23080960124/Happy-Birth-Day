const openBtn = document.getElementById("openBtn");
const content = document.getElementById("content");
const music = document.getElementById("music");
const gallery = document.getElementById("gallery");

const captions = {
  2: "Terima kasih sudah selalu ada.",
  5: "Rumah tidak selalu tentang tempat.",
  9: "Aku bangga punya Mbak.",
  14: "Hari biasa yang jadi kenangan.",
  18: "Pelukan paling tenang.",
  22: "Tempat pulang favoritku.",
  28: "Terima kasih sudah bertahan.",
  34: "Bahagia selalu, Mbak."
};

for (let i = 1; i <= 34; i++) {

  const card = document.createElement("div");
  card.className = "photo-card";

  const rotate = Math.floor(Math.random() * 8) - 4;
  card.style.setProperty("--rotate", `${rotate}deg`);

  const img = document.createElement("img");
  img.src = `assets/images/foto${i}.jpg`;

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

Selamat ulang tahun, Mbak.

Terima kasih karena selama ini sudah menjadi banyak hal dalam hidup kami.

Setelah Ayah pergi, mungkin hidup tidak berjalan mudah untukmu. Namun, entah bagaimana, Mbak selalu berhasil membuat kami merasa semuanya akan baik-baik saja.

Mbak selalu berusaha menjadi sosok apa pun yang kami butuhkan.

Menjadi kakak, teman, tempat bercerita, penguat, bahkan terkadang menjadi orang tua bagi kami.

Aku tahu itu tidak mudah.

Aku tahu ada banyak lelah yang Mbak simpan sendiri.

Meski kita sering bertengkar, aku tidak pernah meragukan satu hal: Mbak adalah salah satu orang terkuat yang pernah aku kenal.

Sekarang, aku hanya ingin Mbak tahu bahwa Mbak tidak harus selalu kuat.

Tidak apa-apa jika sesekali bersandar.

Aku berharap Mbak dipertemukan dengan seseorang yang bisa menjadi tempat pulang dan sandaran, seperti selama ini Mbak menjadi sandaran bagi banyak orang.

Semoga Mbak selalu sehat.

Semoga rezeki Mbak dilimpahkan.

Semoga usaha dan impian Mbak dimudahkan.

Semoga langkah Mbak selalu didekatkan dengan jalan kebaikan.

Dan semoga, mulai hari ini dan seterusnya, lebih banyak hal baik yang datang kepada Mbak.

Terima kasih karena sudah menjadi Mbak Riris.

Kami sayang Mbak. 🤍`;

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