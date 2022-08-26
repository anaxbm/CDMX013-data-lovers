import {
  films,
  filterDate,
  filterScore,
  filterDirectors,
  filterProducers,
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
});

describe(" filterProducers", () => {
  it("is a function", () => {
    expect(typeof filterProducers).toBe("function");
  });

  it("Debería retornar Castle in the Sky para productor Isao Takahata", () => {
    expect(filterProducers("Isao Takahata")).toContain(films[0]);
  });
});
