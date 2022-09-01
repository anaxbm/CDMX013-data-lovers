import {
  films,
  filterDate,
  filterScore,
  filterDirectors,
  filterProducers,
  sortingFilms,
} from "../src/data.js";

describe("filterDate", () => {
  it("is a function", () => {
    expect(typeof filterDate).toBe("function");
  });

  it("Debería retornar Castle in the Sky para año de estreno 1986", () => {
    expect(filterDate("1986")).toContain(films[0]);
  });
});

describe("filterScore", () => {
  it("is a function", () => {
    expect(typeof filterScore).toBe("function");
  });

  it("Debería retornar Castle in the Sky para puntuación de 95", () => {
    expect(filterScore("95")).toContain(films[0]);
  });
});

describe("filterDirectors", () => {
  it("is a function", () => {
    expect(typeof filterDirectors).toBe("function");
  });

  it("Debería retornar Castle in the Sky para director Hayao Miyazaki", () => {
    expect(filterDirectors("Hayao Miyazaki")).toContain(films[0]);
  });

  it("Debería retornar Films para Todos", () => {
    expect(filterDirectors("All")).toBe(films);
  });
});

describe(" filterProducers", () => {
  it("is a function", () => {
    expect(typeof filterProducers).toBe("function");
  });

  it("Debería retornar Castle in the Sky para productor Isao Takahata", () => {
    expect(filterProducers("Isao Takahata")).toContain(films[0]);
  });

  it("Debería retornar Films para Todos", () => {
    expect(filterProducers("All")).toBe(films);
  });
});

describe("sortingFilms", () => {
  it("is a function", () => {
    expect(typeof sortingFilms).toBe("function");
  });

  it("Debería retornar peliculas ordenadas de la A a la Z", () => {
    expect(sortingFilms("A to Z")[0].title).toBe("Castle in the Sky");
  });

  it("Debería retornar peliculas ordenadas de la A a la Z u ordenadas de la Z a la A", () => {
    expect(sortingFilms("Z to A")[0].title).toBe("Whisper of the Heart");
  });

  it("Debería retornar peliculas ordenadas de la A a la Z u ordenadas de la Z a la A", () => {
    expect(sortingFilms("Z to A")[0].title).toBe(
      sortingFilms("A to Z")[19].title
    );
  });

  it("Debería retornar peliculas ordenadas de la A a la Z u ordenadas de la Z a la A", () => {
    expect(sortingFilms("Z to A")[1].title).toBe(
      sortingFilms("A to Z")[18].title
    );
  });
});