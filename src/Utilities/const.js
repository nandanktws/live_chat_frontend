



const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Julia', 'Kate', 'Liam', 'Mia', 'Nate', 'Olivia', 'Paul', 'Quinn', 'Riley', 'Sarah', 'Tom', 'Una', 'Violet', 'William', 'Xander', 'Yara', 'Zoe'];
const surnames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Anderson', 'Wilson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Cooper', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price'];

let randomName = names[Math.floor(Math.random() * names.length)];
let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

export const createNewName = () =>{
  return `${randomName} ${randomSurname}`
}



