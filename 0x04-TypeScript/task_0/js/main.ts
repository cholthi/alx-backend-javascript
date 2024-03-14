interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Colorado",
 };

const student2: Student = {
  firstName: "Steven",
  lastName: "Doe",
  age: 30,
  location: "Los Angeles",
  };

const students = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

students.forEach((obj) => {
  const row = document.createElement("tr");
  const cellName = document.createElement("td");
  const cellLocation = document.createElement("td");
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
