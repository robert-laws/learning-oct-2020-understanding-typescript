// unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'hello';

if (typeof userInput === 'string') {
  userName = userInput;
}

// never type
function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };
}

const result = generateError('An error occurred', 400);
console.log(result);
