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

// 🔥 Calculate exact age (years, months, days)
function calculateExactAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  // Fix negative days
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Fix negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Build readable format
  let result = "";

  if (years > 0) {
    result += `${years} yr${years > 1 ? "s" : ""} `;
  }

  if (months > 0 || years > 0) {
    result += `${months} mo${months > 1 ? "s" : ""} `;
  }

  result += `${days} day${days > 1 ? "s" : ""}`;

  return result.trim();
}

// 🔥 Set values to HTML
document.getElementById("name").textContent = pet.name;
document.getElementById("petNameBig").textContent = pet.name;
document.getElementById("age").textContent = calculateExactAge(pet.birthDate);
document.getElementById("breed").textContent = pet.breed;
document.getElementById("status").textContent = pet.status;
document.getElementById("sex").textContent = pet.sex;
document.getElementById("color").textContent = pet.color;

document.getElementById("owner").innerHTML = "<strong>Owner:</strong> " + pet.owner;
document.getElementById("address").innerHTML = "<strong>Address:</strong> " + pet.address;
document.getElementById("phone").innerHTML = "<strong>Phone:</strong> " + pet.phone;

document.getElementById("petImage").src = pet.image;
