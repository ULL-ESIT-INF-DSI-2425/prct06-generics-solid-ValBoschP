import { FileManager, FileSystemReader, FileSystemWriter } from "./FileManager";

const filePath = "example.txt";
const fileManager = new FileManager(new FileSystemReader(), new FileSystemWriter(), filePath);

const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);
