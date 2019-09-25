import PositionInterface from './PositionInterface';

/**
 * Classe para leitura da entrada por arquivo.
 * @extends PositionInterface
 */
export default class PositionPage extends PositionInterface{

  /**
   * @param {number} page_number Número da página 
   */
  constructor(page_number){
    super(page_number);
    this.sufix = 'page ';
  }

  toString(){
    return this.sufix + this.str_position.toString()
  }

  print(print_method = console.log){
    print_method(this.toString())
  }
}