import { describe, expect, test } from "vitest";
import { Movie } from "../Movie";

describe("Movie", () => {
  test("should create a movie instance with correct properties", () => {
    const movie = new Movie("Inception", 2010, "Sci-Fi", "Christopher Nolan", 148);

    expect(movie.title).toBe("Inception");
    expect(movie.year).toBe(2010);
    expect(movie.genre).toBe("Sci-Fi");
    expect(movie.director).toBe("Christopher Nolan");
    expect(movie.duration).toBe(148);
  });

  test("should correctly update movie properties", () => {
    const movie = new Movie("Inception", 2010, "Sci-Fi", "Christopher Nolan", 148);

    movie.title = "Interstellar";
    movie.year = 2014;
    movie.genre = "Drama";
    movie.director = "Christopher Nolan";
    movie.duration = 169;

    expect(movie.title).toBe("Interstellar");
    expect(movie.year).toBe(2014);
    expect(movie.genre).toBe("Drama");
    expect(movie.director).toBe("Christopher Nolan");
    expect(movie.duration).toBe(169);
  });
});
