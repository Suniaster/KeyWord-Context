

/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes de entradas
 */
export default class OutputInterface{
  constructor(){

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === OutputInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

    // Requerindo a criação do método read para 
    if(this.write === undefined){
      throw new TypeError("Must create method read.");
    }

  }
}

