(() => {

    type Avenger = {

        name: string,
        weapon: string

    }

    const ironman: Avenger = {
        name: 'Iron man',
        weapon: 'ArmorSUIT'
    }

    const man: Avenger = {
        name: 'cAP',
        weapon: 'mARTILLO'
    }

    const tor: Avenger = {
        name: 'tor',
        weapon: 'Fureza'
    }

    const avengers: Avenger[] = [ironman, man, tor];

   for(const avenger of avengers){
    //    console.log(avenger);
   }

})();