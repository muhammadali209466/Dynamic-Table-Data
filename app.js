var parent = document.getElementById("parent");

function Std(name = "?", email = "?", age = "?", course = "?", campus = "?") {
  this.name = name;
  this.email = email;
  this.age = age;
  this.course = course;
  this.campus = campus;
}

function addStudent() {
  var name = prompt("Enter Name") || "?";
  var email = prompt("Enter Email") || "?";
  var age = prompt("Enter Age") || "?";
  var course = prompt("Enter Course") || "?";
  var campus = prompt("Enter Campus") || "?";

  var student = new Std(name, email, age, course, campus);
  console.log(student);

  var tableData = `<tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.age}</td>
          <td>${student.course}</td>
          <td>${student.campus}</td>
          <br />
        </tr> `;
  parent.innerHTML += tableData;
}

function deleteAll() {
  // console.log("deleteAll")
  parent.innerHTML = "";
}
