(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Construtcto avenger llamado.');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMuntant: boolean
        ) {
            super(name, realName);
            // console.log('Constructor Xmen llamado.');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            this.name = name;
        }

    }

    const wolverine = new Xmen('nana', 'ldos', true);
    // console.log(wolverine.fullName);

    wolverine.fullName = 'leandro';
    // console.log(wolverine.fullName);
    
})();