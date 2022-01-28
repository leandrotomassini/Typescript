(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {

            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis1..el único');
            }

            return Apocalipsis.instance;
        }

        changeName(newName:string):void{
            this.name = newName;
        }

    }


    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xasd');

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);


})();