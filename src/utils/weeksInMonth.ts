import { daysInMonth } from './daysInMonth';
import { InternalError } from './error/internal-error';
import { firstDayWeek } from './firstDayWeek';
import { getSixDays } from './getSixDays';

const complementLastWeek = (
  month: number,
  year: number,
  weeks: number[][]
): number[][] => {
  if (weeks[0].length < 7) {
    const lastDays = getSixDays(month - 1, year);
    weeks[0] = [...lastDays.splice(weeks[0].length - 1), ...weeks[0]];
  }

  const lastPos = weeks[weeks.length - 1].length;
  if (lastPos < 7) {
    const firstDays = getSixDays(month + 1, year, false);
    weeks[weeks.length - 1] = [
      ...weeks[weeks.length - 1],
      ...firstDays.splice(0, 7 - lastPos),
    ];
  }

  return weeks;
};

export const weeksInMonth = (
  month: number,
  year: number,
  weeks: number[][] = [],
  day = 1,
  weekIndex = 0,
  loopFinish = false
): number[][] => {
  if (month < 0 || month > 11) throw new InternalError('Error: invalid month!');

  if (loopFinish) return complementLastWeek(month, year, weeks);
  const _firstDayWeek = firstDayWeek(month, year);

  const week: number[] = [];
  for (let j = 0; j < 7; j++) {
    if (day > daysInMonth(month, year)) {
      break;
    }

    if ((weekIndex === 0 && j >= _firstDayWeek) || weekIndex > 0) {
      week.push(day);
      day++;
    }
  }

  if (!week.length) {
    return complementLastWeek(month, year, weeks);
  }

  weekIndex++;
  weeks.push(week);
  return weeksInMonth(month, year, weeks, day, weekIndex, weekIndex >= 6);
};
