import { describe, expect, test } from "vitest";
import { Serie } from "../Serie";

describe("Serie", () => {
  test("should create a serie instance with correct properties", () => {
    const serie = new Serie("Breaking Bad", 2008, "Crime", "Vince Gilligan", 5);

    expect(serie.title).toBe("Breaking Bad");
    expect(serie.year).toBe(2008);
    expect(serie.genre).toBe("Crime");
    expect(serie.creator).toBe("Vince Gilligan");
    expect(serie.seasons).toBe(5);
  });

  test("should correctly update serie properties", () => {
    const serie = new Serie("Breaking Bad", 2008, "Crime", "Vince Gilligan", 5);

    serie.title = "Better Call Saul";
    serie.year = 2015;
    serie.genre = "Drama";
    serie.creator = "Vince Gilligan";
    serie.seasons = 6;

    expect(serie.title).toBe("Better Call Saul");
    expect(serie.year).toBe(2015);
    expect(serie.genre).toBe("Drama");
    expect(serie.creator).toBe("Vince Gilligan");
    expect(serie.seasons).toBe(6);
  });
});
