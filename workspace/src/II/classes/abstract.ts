(() => {

    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string
        ) {

        }

    }

    class Xmen extends Mutante {
        salvarMundo() {
            return `Mundo a salvo.`;
        }

    }

    class Villian extends Mutante {
        consquistarMundo() {
            return `Mundo conquistado.`;
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const villian = new Villian('Coco', 'Ldsn');

    // console.log(wolverine.salvarMundo());
    // console.log(villian.consquistarMundo());

    const printName = (character: Mutante) => {
        // console.log(character.realName);
    }

    printName(wolverine);

})();