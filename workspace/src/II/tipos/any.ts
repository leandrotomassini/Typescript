(()=>{

    let avenger:string;
    let power;
    let exists;

    avenger = 'doctor strange';
    console.log(avenger as string).charAt(0);
    
    avenger = 150.231;
    console.log((<number>avenger).toFixed(2));
        
    console.log(exists);
    console.log(power);
    

})();