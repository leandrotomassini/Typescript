// Void


// Explicit type
function showInfo(user:any):any{
    console.log('User info', user.id, user.name, user.firstName);
}

showInfo({id: 1, username: 'lea', firstName: 'pepe'});

// Tipo inferido
function showFormattedInfo(user:any){
    console.log('User info',`
        id: ${user.id},
        username: ${user.firstName}
    `);
}

let unusable:void;
unusable = null;
unusable = undefined;

// Never type
function handleError(code: number, message: string):never{

    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);

}

handleError(404, 'Not found');


























