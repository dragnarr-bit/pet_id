// =========================
// 🐾 PET DATA
// =========================
const pet = {
  name: "Max",
  breed: "Belgian Shepherd",
  status: "Fully Vaccinated",
  sex: "Male",
  color: "Fawn/Tan with Black Mask",
  owner: "Lhyam Khyle Paredes",
  address: "Aquarius St., JR Torres Subd., Brgy. Singcang, Bacolod City",
  phone: "09663784966/09939519345",
  image: "download.png",
  birthDate: "2025-04-15"
};

// =========================
// 🧮 LIVE AGE CALCULATION
// =========================
function calculateLiveAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();

  if (now.getDate() < birth.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}y ${months}mo`;
}

// =========================
// 🎂 BIRTHDAY COUNTDOWN (FIXED)
// =========================
function getBirthdayCountdown(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);

  let nextBirthday = new Date(
    now.getFullYear(),
    birth.getMonth(),
    birth.getDate()
  );

  if (nextBirthday < now) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  }

  const diff = nextBirthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // ✅ accurate birthday check (date only)
  const isBirthday =
    now.getDate() === birth.getDate() &&
    now.getMonth() === birth.getMonth();

  if (isBirthday) {
    return "🎉 Today is the birthday!";
  }

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// =========================
// 🖼️ SAFE IMAGE HANDLING
// =========================
const petImage = document.getElementById("petImage");

petImage.src = pet.image;

petImage.onerror = () => {
  petImage.src = "default-pet.png";
};

// =========================
// 🧾 STATIC DATA RENDER
// =========================
function renderStaticData() {
  document.getElementById("name").textContent = pet.name;
  document.getElementById("petNameBig").textContent = pet.name;
  document.getElementById("breed").textContent = pet.breed;
  document.getElementById("status").textContent = pet.status;
  document.getElementById("sex").textContent = pet.sex;
  document.getElementById("color").textContent = pet.color;

  document.getElementById("owner").textContent =
    "Owner: " + pet.owner;

  document.getElementById("address").textContent =
    "Address: " + pet.address;

  document.getElementById("phone").textContent =
    "Phone: " + pet.phone;
}

// =========================
// 🔄 LIVE DATA UPDATE
// =========================
function updateLiveData() {
  document.getElementById("age").textContent =
    calculateLiveAge(pet.birthDate);

  document.getElementById("birthdayTimer").textContent =
    getBirthdayCountdown(pet.birthDate);
}

// =========================
// 📲 DOWNLOAD STORY (1080x1920)
// =========================
function downloadStory() {
  const canvas = document.getElementById("storyCanvas");
  const ctx = canvas.getContext("2d");

  // background
  ctx.fillStyle = "#fff7ed";
  ctx.fillRect(0, 0, 1080, 1920);

  // card
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 12;
  roundRect(ctx, 80, 120, 920, 1680, 40, true, true);

  // title
  ctx.fillStyle = "#b45309";
  ctx.font = "bold 48px Poppins";
  ctx.textAlign = "center";
  ctx.fillText("PET IDENTIFICATION CARD", 540, 220);

  // name
  const name = document.getElementById("petNameBig").innerText || "PET NAME";
  ctx.fillStyle = "#d97706";
  ctx.font = "bold 64px Poppins";
  ctx.fillText(name, 540, 1450);

  // image
  const img = document.getElementById("petImage");
  const petImg = new Image();
  petImg.crossOrigin = "anonymous";
  petImg.src = img.src;

  petImg.onload = () => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(540, 700, 220, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(petImg, 320, 480, 440, 440);
    ctx.restore();

    // barcode
    const barcode = new Image();
    barcode.src = "barcode.png";

    barcode.onload = () => {
      ctx.drawImage(barcode, 360, 1520, 360, 120);

      // download
      const link = document.createElement("a");
      link.download = "pet-story.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };
}

// =========================
// 🧩 HELPER: ROUNDED RECT
// =========================
function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();

  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

// =========================
// 🚀 INIT
// =========================
function init() {
  renderStaticData();
  updateLiveData();

  // birthday countdown (every second)
  setInterval(() => {
    document.getElementById("birthdayTimer").textContent =
      getBirthdayCountdown(pet.birthDate);
  }, 1000);

  // age updates (every hour)
  setInterval(() => {
    document.getElementById("age").textContent =
      calculateLiveAge(pet.birthDate);
  }, 60 * 60 * 1000);
}

// start app
init();
