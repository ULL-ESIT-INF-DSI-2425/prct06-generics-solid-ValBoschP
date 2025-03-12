import * as fs from "fs";

/**
 * Interface that defines the behavior of a file reader.
 */
export interface FileReader {
  /**
   * Reads the content of a file.
   * @param filePath - The path of the file to be read.
   * @returns The content of the file as a string.
   */
  read(filePath: string): string;
}

/**
 * Interface that defines the behavior of a file writer.
 */
export interface FileWriter {
  /**
   * Writes data to a file.
   * @param filePath - The path of the file where the data will be written.
   * @param data - The content to be written in the file.
   */
  write(filePath: string, data: string): void;
}

/**
 * Class responsible for reading files from the file system.
 * Implements the `FileReader` interface.
 */
export class FileSystemReader implements FileReader {
  /**
   * Reads the content of a file from the file system.
   * @param filePath - The path of the file to be read.
   * @returns The content of the file as a string, or an empty string if an error occurs.
   */
  read(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error(`Error al leer el archivo: ${error}`);
      return "";
    }
  }
}

/**
 * Class responsible for writing files to the file system.
 * Implements the `FileWriter` interface.
 */
export class FileSystemWriter implements FileWriter {
  /**
   * Writes data to a file in the file system.
   * @param filePath - The path of the file where the data will be written.
   * @param data - The content to be written in the file.
   */
  write(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error(`Error al escribir en el archivo: ${error}`);
    }
  }
}

/**
 * Manages file operations using a `FileReader` and a `FileWriter`.
 * Allows reading and writing files while following the Dependency Inversion Principle.
 */
export class FileManager {
  /**
   * Creates an instance of `FileManager`.
   * @param reader - An implementation of `FileReader` for reading files.
   * @param writer - An implementation of `FileWriter` for writing files.
   * @param filePath - The path of the file to manage.
   */
  constructor(private reader: FileReader, private writer: FileWriter, private filePath: string) {}

  /**
   * Reads the content of the file using the provided `FileReader` implementation.
   * @returns The content of the file as a string.
   */
  readFile(): string {
    return this.reader.read(this.filePath);
  }

  /**
   * Writes data to the file using the provided `FileWriter` implementation.
   * @param data - The content to be written in the file.
   */
  writeFile(data: string): void {
    this.writer.write(this.filePath, data);
  }
}