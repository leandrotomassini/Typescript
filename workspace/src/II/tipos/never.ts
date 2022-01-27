(()=>{

    const error = (mensaje:string):never => {
        if(false){
            throw new Error(mensaje);
        }
    }

    error('Auxilio!');
    console.log('Hola mundo');
    
})();