// task_0/js/main.ts

// 1. Write an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 24,
  location: "Nairobi",
};

// 3. Create an array named studentsList
const studentsList: Student[] = [student1, student2];

// 4. Using Vanilla Javascript, render a table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Add a header row
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
const headerLocation = document.createElement('th');
headerFirstName.textContent = 'First Name';
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tbody.appendChild(headerRow);

// 5. For each student, append a new row
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table); // Add the table to the HTML document