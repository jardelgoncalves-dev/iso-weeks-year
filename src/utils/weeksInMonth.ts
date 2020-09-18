import { daysInMonth } from './daysInMonth';
import { InternalError } from './error/internal-error';
import { firstDayWeek } from './firstDayWeek';

export const weeksInMonth = (
  month: number,
  year: number,
  weeks: number[][] = [],
  day = 1,
  weekIndex = 0,
  loopFinish = false
): number[][] => {
  if (month < 0 || month > 11) throw new InternalError('Error invalid month!');

  if (loopFinish) return weeks;
  const _firstDayWeek = firstDayWeek(month, year);

  const week: number[] = [];
  for (let j = 0; j < 7; j++) {
    if (weekIndex === 0 && j < _firstDayWeek) {
      continue;
    } else if (day > daysInMonth(month, year)) {
      break;
    }
    week.push(day);
    day++;
  }

  if (!week.length) {
    return weeks;
  }

  weekIndex++;
  weeks.push(week);
  return weeksInMonth(month, year, weeks, day, weekIndex, weekIndex >= 6);
};
