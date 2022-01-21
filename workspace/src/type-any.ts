// Explicit type
let idUser:any;
idUser = 1; // Number
idUser = '1'; // String
console.log('iduser', idUser);

// Inferred type
let otherId;
otherId =1;
otherId = '1';
otherId = true;
console.log('otherid', otherId);

let surprise: any = 'hello typescript';

const res = surprise.substring(6);
console.log('res',res);




function sumNumbers(limit:number): never{

    let sum = 0;

    while(true){
        sum++;
    }

}


sumNumbers(10);