function printConsole(constructor: Function) {
    console.log(constructor);
}

const printConsoleC = (print: boolean = false): Function => {
    if (print) {
        return printConsole;
    } else {
        return () => { };
    }
}

const bloquearPrototitpo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@bloquearPrototitpo
@printConsoleC(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.com';

    constructor(
        public name: string
    ) { }

    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado a la base de datos ${id}`);

    }



}