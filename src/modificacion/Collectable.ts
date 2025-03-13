/**
 * Interfaz genérica Collectable que especifica propiedades
 * de algo coleccionable.
 */
export interface Collectable<T> {
  /**
   * Añade un item
   * @param item - Item a añadir
   */
  addItem(item: T): void;
  /** 
   * Gets item de determinado index
   * @param index - Index del item
   * @return The item
   */
  getItem(index: number): T;
  /**
   * Elimina un item en concreto
   * @param item - Item a eliminar
   */
  removeItem(item: T): void;
  /**
   * Devuelve el número de items total
   * @returns número de items total.
   */
  getNumberOfItems(): number;
}

