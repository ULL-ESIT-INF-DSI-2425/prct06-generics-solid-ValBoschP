import { describe, expect, test } from "vitest";
import { Media } from "../Media";

/**
 * Mock class that implements the Media interface.
 */
class MockMedia implements Media {
  constructor(public title: string, public year: number, public genre: string) {}
}

describe("Media Interface", () => {
  test("should ensure a class implementing Media has the required properties", () => {
    const media: Media = new MockMedia("Example Title", 2022, "Action");

    expect(media.title).toBe("Example Title");
    expect(media.year).toBe(2022);
    expect(media.genre).toBe("Action");
  });
});
