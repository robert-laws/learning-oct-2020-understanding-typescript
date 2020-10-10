// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'bob',
//   age: 34,
// };

// objects and arrays

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'bob',
//   age: 34,
//   hobbies: ['walking', 'reading'],
//   role: [6, 'item'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'bob',
  age: 34,
  hobbies: ['walking', 'reading'],
  role: Role.ADMIN,
};

let activities: string[];
activities = ['boating', 'walking'];

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

console.log(person.role);

// Tuple
// [1, 2] - fixed length and type array
// ex. role: [number, string];

// Enum
// enum { new, old } - automatically enumerated global constant identifiers
// ex enum Role { ADMIN, USER } - assigns labels to numbers

// Any
// allows use of any type - avoid if possible
