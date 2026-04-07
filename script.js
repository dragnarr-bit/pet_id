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

// 🔥 Function to calculate age automatically
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Format output
  if (years > 0) {
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo${months > 1 ? "s" : ""}`;
  } else {
    return `${months} mo${months > 1 ? "s" : ""}`;
  }
}

// Set values to HTML
document.getElementById("name").textContent = pet.name;
document.getElementById("petNameBig").textContent = pet.name;
document.getElementById("age").textContent = calculateAge(pet.birthDate);
document.getElementById("breed").textContent = pet.breed;
document.getElementById("status").textContent = pet.status;
document.getElementById("sex").textContent = pet.sex;
document.getElementById("color").textContent = pet.color;

document.getElementById("owner").innerHTML = "<strong>Owner:</strong> " + pet.owner;
document.getElementById("address").innerHTML = "<strong>Address:</strong> " + pet.address;
document.getElementById("phone").innerHTML = "<strong>Phone:</strong> " + pet.phone;

document.getElementById("petImage").src = pet.image;
