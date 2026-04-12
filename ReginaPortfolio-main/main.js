// ====== DATA ======
const highlights = [
  "Internship graphics + promotion",
  "Media pitches + PR writing",
  "Campaign strategy + storytelling",
  "Broadcast-style scripts",
  "Podcast media clips"
];

const internshipWork = [
  {
    title: "CTN Author Welcome Graphic — Larry Schroeder",
    org: "Christian Television Network",
    year: "Internship",
    category: "Graphics",
    image: "assets/attachments/1.png",
    description: "Designed a promotional author welcome graphic.",
    tags: ["Adobe Suite", "Brand Alignment"],
    links: [{ label: "Open Image", href: "assets/attachments/1.png" }]
  },
  {
    title: "Christian Book Tour Promo",
    org: "Christian Television Network",
    year: "Internship",
    category: "Event Promo",
    image: "assets/attachments/2.png",
    description: "Promotional graphic for author event.",
    tags: ["Marketing"],
    links: [{ label: "Open Image", href: "assets/attachments/2.png" }]
  }
];

// ====== 🔥 MEDIA (UPDATED) ======
const mediaShort = [
  // OLD VIDEOS
  {
    title: "Podcast Clip 1",
    video: "assets/attachments/one.mov",
    description: "Short clip"
  },
  {
    title: "Podcast Clip 2",
    video: "assets/attachments/two.mov",
    description: "Short clip"
  },
  {
    title: "Podcast Clip 3",
    video: "assets/attachments/three.mov",
    description: "Short clip"
  },
  {
    title: "Podcast Clip 4",
    video: "assets/attachments/four.mov",
    description: "Short clip"
  },

  // 🔥 NEW VIDEOS
  {
    title: "New Clip 1",
    video: "assets/1.mp4",
    description: "New content"
  },
  {
    title: "New Clip 2",
    video: "assets/2.mp4",
    description: "New content"
  },
  {
    title: "New Clip 3",
    video: "assets/3.mp4",
    description: "New content"
  },
  {
    title: "New Clip 4",
    video: "assets/4.mp4",
    description: "New content"
  },
  {
    title: "New Clip 5",
    video: "assets/5.mp4",
    description: "New content"
  }
];

// ====== DOM ======
const grid = document.getElementById("mediaShortGrid");

// ====== RENDER VIDEOS ======
function renderMedia() {
  if (!grid) return;

  grid.innerHTML = "";

  mediaShort.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const video = document.createElement("video");
    video.src = item.video;
    video.className = "card-video";

    // 🔥 makes it look clean + modern
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    card.appendChild(video);

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.textContent = item.title;

    body.appendChild(title);
    card.appendChild(body);

    // CLICK → MODAL
    card.addEventListener("click", () => openModal(item.video));

    grid.appendChild(card);
  });
}

// ====== MODAL ======
const modalBackdrop = document.getElementById("modalBackdrop");
const modalMedia = document.getElementById("modalMedia");
const modalClose = document.getElementById("modalClose");

function openModal(src) {
  modalBackdrop.hidden = false;

  modalMedia.innerHTML = `
    <video src="${src}" controls autoplay style="width:100%"></video>
  `;
}

function closeModal() {
  modalBackdrop.hidden = true;
  modalMedia.innerHTML = "";
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}

// ====== INIT ======
renderMedia();
