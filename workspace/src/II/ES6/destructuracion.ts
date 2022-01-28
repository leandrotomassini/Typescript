(() => {
    type Avengers = {
        nick: String;
        ironman: String;
        vision: String;
        activos: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Nombre',
        ironman: 'pepe agento',
        vision: 'otro',
        activos: true,
        poder: 1500
    }

    const printAvenger = ({ ironman, ...resto }: Avengers): void => {
        console.log(ironman, resto.poder);
    }

    // printAvenger(avengers);

    const avenArr: [string, boolean, number] = ['uno', true, 203.2];

    const [capi, ironman, tutu] = avenArr;

    // console.log({ ironman, tutu, capi });




}

)();