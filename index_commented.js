/**
 * Parses a URL instance based on a given URL format.
 *
 * @param {string} urlFormat - The URL format string.
 * @param {string} urlInstance - The URL instance string.
 * @returns {Object} - An object containing the parsed values from the URL instance.
 */

const parseUrl = (urlFormat, urlInstance) => {
  // Early return params validation
  if (
    !urlFormat ||
    !urlInstance ||
    typeof urlFormat !== 'string' ||
    typeof urlInstance !== 'string'
  ) {
    return "Please provide both URL Format and Instance in correct format."
  };

  const variableKeys = {};
  const urlFormatValues = urlFormat.split('/');

  // Extract variable keys and indexes from URL format and save them in variableKeys variable
  for (const [idx, pathValue] of urlFormatValues.entries()) {
    if (pathValue.startsWith(':')) {
      variableKeys[pathValue.slice(1)] = idx
    }
  };

  // Split URL instance into path section and query params
  const [urlPathSection, queryParams] = urlInstance.split('?');
  const urlInstanceValues = urlPathSection.split("/");
  const results = {};

  // Extract values from URL instance based on variable keys and indexes
  for (const [key, indexValue] of Object.entries(variableKeys)) {
    const value = parseInt(urlInstanceValues[indexValue]) || urlInstanceValues[indexValue]
    results[key] = value
  };

  // Extract query params from URL instance and add them to the results object
  const searchParams = new URLSearchParams(queryParams);

  for (const key of [...searchParams.keys()]) {
    const value = searchParams.get(key)
    results[key] = parseInt(value) || value
  };

  return results;
};

module.exports = parseUrl;
