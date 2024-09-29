// 1
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

// for each
for (var key in itemsArray) {
    var ItemPrice = itemsArray[key].price * itemsArray[key].quantity;
    console.log(`Total price of ${itemsArray[key].name} is Rs:${ItemPrice}`);
};

// for all
var totalItemsPrice = 0;
for (var i = 0; i < itemsArray.length; i++) {
    totalItemsPrice += itemsArray[i].price * itemsArray[i].quantity;
}
console.log(`Total price of all items: ${totalItemsPrice}`);


// 02
var user = {
    name: "faiza",
    email: "faiza000Gmail.com",
    password: "12be4",
    age: 21,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
};


console.log("age" in user);
console.log("country" in user);
console.log("firstName" in user);
console.log("lastName" in user);


// 03
function User(name, email, password, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
  }
  
  
  var user1 = new User("John Doe", "johndoe@example.com", "password123", 25, "Male", "New York", "USA");
  var user2 = new User("Jane Smith", "janesmith@example.com", "password456", 28, "Female", "Los Angeles", "USA");
  console.log(user1);
  console.log(user2);
  
//04
// Constructor function for population record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save record to localStorage
function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    records.push(record);
    localStorage.setItem("populationRecords", JSON.stringify(records));
    displayRecords();
}

// Function to display records from localStorage
function displayRecords() {
    let recordsList = document.getElementById("recordsList");
    let records = JSON.parse(localStorage.getItem("populationRecords")) || [];

    recordsList.innerHTML = "";
    records.forEach((record, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
        recordsList.appendChild(listItem);
    });
}

// Event listener for form submission
document.getElementById("populationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;

    let newRecord = new PopulationRecord(name, gender, address, education, profession);
    saveRecord(newRecord);

    // Clear the form after submission
    document.getElementById("populationForm").reset();
});

// Display saved records on page load
window.onload = displayRecords