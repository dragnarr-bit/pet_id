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

// 🔥 LIVE AGE (years → months)
function calculateLiveAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();

  // adjust if current day is before birth day
  if (now.getDate() < birth.getDate()) {
    months--;
  }

  // fix negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}y ${months}mo`; // ✅ FIXED
}

// 🎂 BIRTHDAY COUNTDOWN
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

  let diff = nextBirthday - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);
  let seconds = Math.floor((diff / 1000) % 60);

  // 🎉 If it's the birthday
  if (days === 0 && hours === 0 && minutes === 0) {
    return "🎉 TODAY!";
  }

  return `${days}d ${hours}h ${minutes}m ${seconds}s`; // ✅ FIXED
}

// 🔥 SET STATIC INFO
document.getElementById("name").textContent = pet.name;
document.getElementById("petNameBig").textContent = pet.name;
document.getElementById("breed").textContent = pet.breed;
document.getElementById("status").textContent = pet.status;
document.getElementById("sex").textContent = pet.sex;
document.getElementById("color").textContent = pet.color;

document.getElementById("owner").innerHTML = "<strong>Owner:</strong> " + pet.owner;
document.getElementById("address").innerHTML = "<strong>Address:</strong> " + pet.address;
document.getElementById("phone").innerHTML = "<strong>Phone:</strong> " + pet.phone;

document.getElementById("petImage").src = pet.image;

// 🔄 LIVE UPDATE LOOP
function updateUI() {
  document.getElementById("age").textContent = calculateLiveAge(pet.birthDate);
  document.getElementById("birthdayTimer").textContent = getBirthdayCountdown(pet.birthDate);
}

// run immediately
updateUI();

// update every second
setInterval(updateUI, 1000);
