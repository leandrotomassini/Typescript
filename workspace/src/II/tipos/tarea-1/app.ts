(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum fuerzas {
    fuerzaAcuaman = 0,
    fuerzaBatman = 1,
    fuerzaFlash = 5,
    fuerzaSuperman = 100
  }

  const fuerzaFlash: fuerzas = fuerzas.fuerzaFlash;
  const fuerzaSuperman: fuerzas = fuerzas.fuerzaSuperman;
  const fuerzaBatman: fuerzas = fuerzas.fuerzaBatman;
  const fuerzaAcuaman: fuerzas = fuerzas.fuerzaAcuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})()

