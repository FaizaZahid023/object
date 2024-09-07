/*1. Suppose You have an array of object
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items; */


var itemsArray = [
    {name:" juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
    
    var sum=0;
    for(var key in  itemsArray){
        var item = itemsArray[key];
        var price = item.price*item.quantity;
        sum += price;
        console.log(item.name + " total price is " + price);
       
    }
    console.log("Total price of all items is " + sum);
    
    
    /* 2. Create an object with properties name, email, password, age,
    gender, city, country.
    Check if age and country properties exist in object or not.
    Also check firstName and lastName properties in object. */
    
    var personalInfo={
        name:"Ayesha",
        email:"ayesha@gmail.com",
        password:"1234",
        age:16,
        gender:"female",
        city:"Karachi",
        country:"Pakistan"
    }
    console.log("age" in personalInfo);
    console.log("country" in personalInfo);
    console.log("firstName" in personalInfo);
    console.log("lastName" in personalInfo);
    
    
    /*3. Create a constructor function with some properties. Now
    create multiple records using the constructor. */
    
    function Person(firstName,lastName,age,jobTitle){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.jobTitle=jobTitle;
    }
    // Creating multiple records
    var person1 = new Person("Ayesha", "Enayat", 30, "Engineer");
    var person2 = new Person("Aqsa", "khan", 25, "Designer");
    var person3 = new Person("Umaima", "waheed", 40, "Manager");
    
    
    console.log(person1);
    console.log(person2);
    console.log(person3);
    
    
// 4
// Constructor function for population records
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}