import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase que extiende a PrintableCollection, representa una colección
 * de números imprimibles.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(items: number[]) {
    super(items);
  } 
  /** 
   * Añade un número a la colección
   * @param item - Número a añadir a la colección
   */
  addItem(item: number): void {
    this.items.push(item);
  }

  /**
   * Gets del número según el index
   * @param index - Index del número
   * @return número a obtener
   */
  getItem(index: number): number {
    return this.items[index];
  }

  /**
   * Elimina un número en concreto de la colección
   * @param item - Número a eliminar
   */
  removeItem(item: number): void {
    this.items = this.items.filter((i) => i !== item);
  }

  /**
   * Devuelve el número total de números de la colección
   * @return Número total de números que hay en la colección
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
  /**
   * Imprime los números que hay en la colección
   * separado por comas.
   * @returns String con la información
   */
  print(): string {
    return this.items.join(', ');
  }
}