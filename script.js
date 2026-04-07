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

// 🔥 Live age calculator (years, months, days, hours, minutes, seconds)
function calculateLiveAge(birthDate) {
  const now = new Date();
  const birth = new Date(birthDate);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  let hours = now.getHours() - birth.getHours();
  let minutes = now.getMinutes() - birth.getMinutes();
  let seconds = now.getSeconds() - birth.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 🔥 Set static values
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

// 🔥 LIVE ticking every second
function updateAge() {
  document.getElementById("age").textContent = calculateLiveAge(pet.birthDate);
}

// run immediately
updateAge();

// update every second
setInterval(updateAge, 1000);
