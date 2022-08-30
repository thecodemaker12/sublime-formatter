### A mini tool for formatting dates, currencies, and relative times.


## Project Status

sublime-formatter is a beta test tool. You can contribute to the evolution.

*Thank you.*

## Resources

- [NumberFormat: toCurrency()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [RelativeTimeFormat: relativeTime](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
- [DateTimeFormat: formatDate](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

## Install
```
$ npm install sublime-formatter --save 
```

## Import

```js
const format = require('sublime-formatter')
```


## Examples

### toCurrency
```js
// first parameter: number (required), Must be an integer
// second parameter: currency (default 'XAF' => Franc CFA BEAC), You can put 'USD' => American Dollars, 'EUR' => Euro, ...
// third parameter: local (default 'fr' => French), You can put 'en' or 'en-EN' => English  Great Britain, 'fr-CA' french Canada, ...
format.toCurrency(15000);
// Output: 15 000 FCFA
```

### relativeTime
```js
// first parameter: time (required), Must be an positive or negative number
// second parameter: unit (default 'day'), You can put 'month', 'week', ...
format.relativeTime(2);
// Output: après-demain
format.relativeTime(-1);
// Output: hier
```

### formatDate
```js
// first parameter: date (required)
// second parameter: format (default null), see the following formats
format.formatDate(new Date());
// Output: 21 août 2022
format.formatDate(new Date(), 'L');
// Output: 21 août 2022, 23:21
```


### default formats
```js
// d: 30,
// m: 08,
// mt: Aug,
// M: August,
// y: 2022,
// LTS: 02:10:24,
// LT: 02:10,
// L: Aug 30, 2022,
// LL: August 30, 2022,
// LLL: August 30, 2022, 02:10,
// LLLL: August 30, 2022, 02:12:06 GMT,
```