(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    // Comentario
    let myCustomVariable: (string | number | Hero) = 'leandro';
    console.log(typeof myCustomVariable)
    
    myCustomVariable = 20
    console.log(typeof myCustomVariable)
    
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)

})()