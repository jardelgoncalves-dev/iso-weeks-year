# iso-weeks-year
Library to view week numbers for a year

## Install
- Using NPM
```
npm i iso-weeks-year
```
- or using yarn
```
yarn add iso-weeks-year
```

## Usage
- **Get every week a year**<br>
  The months range from 0 to 11, where 0 is January and 11 is December

```js
const { weekNumberToYear } = require('iso-weeks-year');
// or import { weekNumberToYear } from 'iso-weeks-year';

const weeks = weekNumberToYear(2020);

console.log(weeks)
/*

// output
[
  {
    "from":{
      "day":30,
      "month":11,
      "year":2019
    },
    "to":{
      "day":5,
      "month":0,
      "year":2020
    },
    "isoWeek":1
  },
  {
    "from":{
      "day":6,
      "month":0,
      "year":2020
    },
    "to":{
      "day":12,
      "month":0,
      "year":2020
    },
    "isoWeek":2
  },
  ...
]
*/
```
- **Get the week number from a date**
```js
const { weekNumberToDate } = require('iso-weeks-year');
// or import { weekNumberToDate } from 'iso-weeks-year';

const weekNumber = weekNumberToDate(new Date(2020, 0, 8)); // January 8, 2020

console.log(weekNumber)
// output: 2
```

## Contributing
- Fork the repository
- Create a `development` based branch with the name of the feature / fix
- And after completing your feature / fix create a PR for `development`