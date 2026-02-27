// Create empty array to store all form records
let students = [];

// Select form
let form = document.getElementById("myform");

// Add event listener
form.addEventListener("submit", function(event) {

    event.preventDefault(); // Stop page refresh

    // Create object
    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        rollNumber: document.getElementById("r_number").value
    };
    students.push(student);
    console.log(students);

    form.reset();
    console.log("data submitted successfully")


    
});