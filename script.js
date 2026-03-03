// Create empty array to store all form records
let students = [];
let editIndex = -1;

// Select form
let form = document.getElementById("myform");
let list = document.getElementById("list");

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
    
    if(student.name ==="" || student.email === "" || student.age === "" || student.rollNumber === ""){
        console.log ("please fill all the fields")
    }
    else if (editIndex === -1) {
        students.push(student);
    } 
    // UPDATE
    else {
        students[editIndex] = student;
        editIndex = -1;
    }

    form.reset();
  
    form.reset();
    displayData();

});
function displayData() {
    list.innerHTML = "";

    students.forEach(function (item, index) {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - ${item.email} - ${item.age} -${item.rollNumber}
            <button onclick="editData(${index})">Edit</button>
            <button onclick="deleteData(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}
function editData(index) {
    document.getElementById("name").value = students[index].name;
    document.getElementById("email").value = students[index].email;
    document.getElementById("age").value = students[index].age;
    document.getElementById("r_number").value = students[index].age;

    editIndex = index;
}
// DELETE
function deleteData(index) {
    students.splice(index, 1);
    displayData();
}