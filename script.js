
// Create empty array to store all form records
let students = [];
let editIndex = -1;

// Select form
let form = document.getElementById("myform");
let list = document.getElementById("list");

// Set Cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Get Cookie
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Check if cookie exists and load data
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
// Add event listener
form.addEventListener("submit", function (event) {

    event.preventDefault(); // Stop page refresh

    // Create object
    let student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        rollNumber: document.getElementById("r_number").value
    };

    if (student.name === "" || student.email === "" || student.age === "" || student.rollNumber === "") {
        alert("please fill all the fields");
        console.log("please fill all the fields")

    }
    else if (editIndex === -1) {
        students.push(student);
    }
    // UPDATE
    else {
        students[editIndex] = student;
        editIndex = -1;
    }
    // store data in local storage in the form of complete array of objects

    localStorage.setItem("students", JSON.stringify(students));

    // store data in local storage during the entire page is closed and open again

    sessionStorage.setItem("students", JSON.stringify(students));


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
    // localStorage.setItem("students", JSON.stringify(students));
    // sessionStorage.setItem("students", JSON.stringify(students));
    setCookie("students", JSON.stringify(students), 7);

    displayData();
}