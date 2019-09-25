
/**
 * Classe abstrata responsável pela criação da interface de tipos diferentes interpretadores de posição.
 * 
 * Classe deve ser incializada com o nome da posição.
 * Em classes que herdam dessa, deve existir implementação do método:
 * 
  -> toString()

  -> print()

 */
export default class PositionInterface{
  constructor(str_position){

    this.str_position = str_position

    // Impedindo instaciamentos de classes desse tipo
    if(new.target === PositionInterface){
      throw new TypeError("Cannot construct InputInterface instances directly");
    }

    // Requerindo a criação do método read para 
    if(this.toString === undefined){
      throw new TypeError("Must create method read.");
    }

    // Requerindo a criação do método read para 
    if(this.print === undefined){
      throw new TypeError("Must create method read.");
    }

  }

  /**  
  */
}
