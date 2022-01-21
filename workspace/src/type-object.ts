// Type: Object
let user: object;

user = {};


user = {
    id: 1,
    username: 'pepe',
    firstName: 'Cocoliso',
    isPro: true
}

console.log('user', user);
// Object vs object(Clase js vs ts)
const myObj =  {
    id: 1,
    username: 'pepe',
    firstName: 'Cocoliso',
    isPro: true
};

const isInstance = myObj instanceof Object; // Clase Object Javascript

console.log('isInstance', isInstance);
console.log('user.username', myObj.username);

