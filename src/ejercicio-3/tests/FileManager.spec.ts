import { describe, expect, test, vi } from "vitest";
import { FileManager, FileReader, FileWriter } from "../FileManager";

class MockFileReader implements FileReader {
  read(filePath: string): string {
    void filePath;
    return "Mocked file content";
  }
}

class MockFileWriter implements FileWriter {
  write(filePath: string, data: string): void {
    console.log(`Mock write: ${data}`);
  }
}

describe("FileManager", () => {
  test("should read file content", () => {
    const fileManager = new FileManager(new MockFileReader(), new MockFileWriter(), "mock.txt");
    expect(fileManager.readFile()).toBe("Mocked file content");
  });

  test("should write file content", () => {
    const mockWriter = new MockFileWriter();
    const spy = vi.spyOn(mockWriter, "write");
    const fileManager = new FileManager(new MockFileReader(), mockWriter, "mock.txt");

    fileManager.writeFile("New Content");

    expect(spy).toHaveBeenCalledWith("mock.txt", "New Content");
  });
});
