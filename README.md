# url_parser_exercise
A simple function to parse URL param values based on a format template also given to the function.

## Built With

- Javascript
- Jest (for testing)

## What it does?

It returns a URL path and params values and keys based on a given URL template.

## For example. Given:

### urlFormat:
```
'/:version/api/:collection/:id'
```
*(being those with ":", the variable placeholders)*

### urlInstance:
```
'/6/api/listings/3?sort=desc&limit=10'
```

### It returns:
```
{
  version: 6,
  collection: 'listings',
  id: 3,
  sort: 'desc',
  limit: 10
}
```

# Notes
- The function only returns the value. You must add a console.log() in the code
  to see the results in the terminal.
- index_commented.js is same as index.js but with explainatory comments in the code.
