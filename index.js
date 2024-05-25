const parseUrl = (urlFormat, urlInstance) => {
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

  for (const [idx, pathValue] of urlFormatValues.entries()) {
    if (pathValue.startsWith(':')) {
      variableKeys[pathValue.slice(1)] = idx
    }
  };

  const [urlPathSection, queryParams] = urlInstance.split('?');
  const urlInstanceValues = urlPathSection.split("/");
  const results = {};

  for (const [key, indexValue] of Object.entries(variableKeys)) {
    const value = parseInt(urlInstanceValues[indexValue]) || urlInstanceValues[indexValue]
    results[key] = value
  };

  const searchParams = new URLSearchParams(queryParams);

  for (const key of [...searchParams.keys()]) {
    const value = searchParams.get(key)
    results[key] = parseInt(value) || value
  };

  return results;
};

module.exports = parseUrl;
