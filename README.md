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
```js
import { weekNumberToYear } from 'iso-weeks-year'

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

```js
import { weekNumberToDate } from 'iso-weeks-year'

const weekNumber = weekNumberToDay(new Date(2020, 0, 8)); // January 8, 2020

console.log(weekNumber) // output: 2
```