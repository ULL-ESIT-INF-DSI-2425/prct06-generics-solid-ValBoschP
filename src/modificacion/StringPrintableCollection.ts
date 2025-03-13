import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase que extiende a PrintableCollection, representa una colección
 * de cadenas imprimibles.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(items: string[]) {
    super(items);
  } 
  /** 
   * Añade una cadena a la colección
   * @param item - Cadena a añadir a la colección
   */
  addItem(item: string): void {
    this.items.push(item);
  }

  /**
   * Gets de la cadena según el index
   * @param index - Index del número
   * @return número a obtener
   */
  getItem(index: number): string {
    return this.items[index];
  }

  /**
   * Elimina una cadena en concreto de la colección
   * @param item - Número a eliminar
   */
  removeItem(item: string): void {
    this.items = this.items.filter((i) => i !== item);
  }

  /**
   * Devuelve el número total de cadenas de la colección
   * @return Número total de cadenas que hay en la colección
   */
  getstringOfItems(): number {
    return this.items.length;
  }
  /**
   * Imprime las cadenas que hay en la colección concatenadas
   * @returns String con la información
   */
  print(): string {
    return this.items.join('');
  }
}