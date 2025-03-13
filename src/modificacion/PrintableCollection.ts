import { Collectable } from "./Collectable";
import { Printable } from "./Printable";

/**
 * Clase abstracta genérica PrintableCollection que implementa Collectable y Printable
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable {
  protected items: T[] = [];
  /** Constructor de la clase PrintableCollection */
  constructor (items: T[]) {
    this.items = items;
  }

  /**
   * Añade un item
   * @param item - Item a añadir
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /** 
   * Gets item de determinado index
   * @param index - Index del item
   * @return The item
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Elimina un item en concreto
   * @param item - Item a eliminar
   */
  removeItem(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  /**
   * Devuelve el número de items total
   * @returns número de items total.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Imprime la información
   * @returns Infomación en string
   */
  abstract print(): string;
}


