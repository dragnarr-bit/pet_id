const pet = {
  name: "Max",
  breed: "Belgian Malinois",
  status: "Fully Vaccinated",
  sex: "Male",
  color: "Fawn/Tan with Black Mask",
  owner: "Lhyam Khyle Paredes",
  address: "Aquarius St., JR Torres Subd., Brgy. Singcang, Bacolod City",
  phone: "09663784966 (Globe)",
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
// 🎂 BIRTHDAY COUNTDOWN
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

  // 🎉 improved birthday condition
  if (days === 0) {
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
