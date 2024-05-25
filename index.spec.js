const parseUrl = require('./index.js');

describe("Should parse URL values correctly", () => {
  test("it returns a validation message when params are missing", () => {
    const results = parseUrl();
    expect(results).toBe("Please provide both URL Format and Instance in correct format.");
  })

  test("it returns a validation message when params are not strings", () => {
    const results = parseUrl(123, true);
    expect(results).toBe("Please provide both URL Format and Instance in correct format.");
  })

  test("it returns correct results when parsing URL with correct data", () => {
    const results = parseUrl(':carpeta/indice/:valor', 'imagenes/3/imagen.jpg?witdh=375&height=150');
    expect(results).toMatchObject({
      carpeta: 'imagenes',
      valor: 'imagen.jpg',
      witdh: 375,
      height: 150
    })
  })

  test("it returns number data type when url data is an integer", () => {
    const results = parseUrl(':carpeta/indice/:valor', 'imagenes/3/imagen.jpg?witdh=375&height=150');
    expect(results).toMatchObject({
      carpeta: 'imagenes',
      valor: 'imagen.jpg',
      witdh: 375,
      height: 150
    })
  })

  test("it parses data correctly when URL starts with /", () => {
    const results = parseUrl('/:carpeta/indice/:valor', '/imagenes/3/imagen.jpg?witdh=375&height=150');
    expect(results).toMatchObject({
      carpeta: 'imagenes',
      valor: 'imagen.jpg',
      witdh: 375,
      height: 150
    })
  })
})