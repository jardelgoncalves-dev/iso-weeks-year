import { weeksInMonth, Week } from './utils/weeksInMonth';
import { weekNumberToDate } from './utils/weekNumberToDate';
import { orderBy } from './utils/order';

export interface WeekData {
  year: number;
  month: number;
  day: number;
}

export interface IsoWeekNumber {
  from: WeekData;
  to: WeekData;
  isoWeek: number;
}

const duplicateReduce = (acc: IsoWeekNumber[], item: IsoWeekNumber) => {
  return acc.length
    ? acc.some((t) => t.isoWeek === item.isoWeek)
      ? acc
      : [...acc, item]
    : [...acc, item];
};

const mapIsoWeek = (w: Week): IsoWeekNumber => {
  const date = new Date(w.year, w.month, w.data[1]);
  const weekNumber = weekNumberToDate(date);
  date.setDate(date.getDate() + 6);
  return {
    from: {
      day: w.data[1],
      month: w.month,
      year: w.year,
    },
    to: {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    },
    isoWeek: weekNumber,
  };
};

const isoWeekNormalized = (weeks: Week[][]): IsoWeekNumber[] => {
  const data = weeks.reduce((acc: IsoWeekNumber[], item): IsoWeekNumber[] => {
    const itemData: IsoWeekNumber[] = item.map(mapIsoWeek);
    return [...acc, ...itemData];
  }, []);

  return orderBy<IsoWeekNumber>(
    data.reduce(duplicateReduce, []),
    ['isoWeek'],
    ['asc']
  );
};

export const weekNumberToYear = (year: number): IsoWeekNumber[] => {
  const weeks = [];
  for (let i = 0; i <= 11; i++) {
    const weeksMonth = weeksInMonth(i, year);
    weeks.push(weeksMonth);
  }

  return isoWeekNormalized(weeks);
};

export { weekNumberToDate };
