/**
 * Parses a URL instance based on a given URL format.
 *
 * @param {string} urlFormat - The URL format string.
 * @param {string} urlInstance - The URL instance string.
 * @returns {Object} - An object containing the parsed values from the URL instance.
 * @throws {string} - Throws an error message if either the URL format or instance is missing or not in the correct format.
 */

const parseUrl = (urlFormat, urlInstance) => {
  if (
    !urlFormat ||
    !urlInstance ||
    typeof urlFormat !== 'string' ||
    typeof urlInstance !== 'string'
  ) {
    return "Please provide both URL Format and Instance in correct format."
  }

  const variableKeys = {};
  const urlFormatValues = urlFormat.split('/');

  for ([idx, pathValue] of urlFormatValues.entries()) {
    if (pathValue.startsWith(':')) {
      variableKeys[pathValue.slice(1)] = idx
    }
  }

  const [urlPathSection, queryParams] = urlInstance.split('?')
  const urlInstanceValues = urlPathSection.split("/")
  const results = {};

  for (const [key, indexValue] of Object.entries(variableKeys)) {
    const value = parseInt(urlInstanceValues[indexValue]) || urlInstanceValues[indexValue]
    results[key] = value
  }

  const searchParams = new URLSearchParams(queryParams)

  for (key of [...searchParams.keys()]) {
    const value = searchParams.get(key)
    results[key] = parseInt(value) || value
  }

  return results;
};

console.log(parseUrl(':carpeta/indice/:valor', 'imagenes/3/imagen.jpg?witdh=375&height=150'));