import { describe, expect, test } from "vitest";
import { Documentary } from "../Documentary";

describe("Documentary", () => {
  test("should create a documentary with correct properties", () => {
    const documentary = new Documentary(
      "Planet Earth",
      2006,
      "Nature",
      "Alastair Fothergill",
      550
    );

    expect(documentary.title).toBe("Planet Earth");
    expect(documentary.year).toBe(2006);
    expect(documentary.genre).toBe("Nature");
    expect(documentary.director).toBe("Alastair Fothergill");
    expect(documentary.duration).toBe(550);
  });
});
