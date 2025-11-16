// task_1/js/main.ts

// --- Task 1: Let's build a Teacher interface ---

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allows any other property
}

// Example for Task 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // This is allowed due to the index signature
};

console.log('--- Task 1 Example ---');
console.log(teacher3);

// --- Task 2: Extending the Teacher class ---

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example for Task 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('--- Task 2 Example ---');
console.log(director1);

// --- Task 3: Printing teachers ---

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example for Task 3
console.log('--- Task 3 Example ---');
console.log(printTeacher("John", "Doe")); // -> J. Doe

// --- Task 4: Writing a class ---

// Interface for the constructor
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example for Task 4
console.log('--- Task 4 Example ---');
const student = new StudentClass('Alice', 'Smith');
console.log(student.displayName());
console.log(student.workOnHomework());