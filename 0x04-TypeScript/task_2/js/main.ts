// task_2/js/main.ts

// --- Task 5: Advanced types Part 1 ---

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example for Task 5
console.log('--- Task 5 Examples ---');
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director


// --- Task 6: Creating functions specific to employees ---

// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  // Check if the 'workDirectorTasks' method exists on the employee
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example for Task 6
console.log('--- Task 6 Examples ---');
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks


// --- Task 7: String literal types ---

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This line is technically unreachable due to the Subject type
  // but it's good practice for exhaustive checks.
  return `Teaching ${todayClass}`;
}

// Example for Task 7
console.log('--- Task 7 Examples ---');
console.log(teachClass('Math'));   // Teaching Math
console.log(teachClass('History')); // Teaching History