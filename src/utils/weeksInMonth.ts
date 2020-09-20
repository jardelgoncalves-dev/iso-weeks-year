import { daysInMonth } from './daysInMonth';
import { InternalError } from './error/internal-error';
import { firstDayWeek } from './firstDayWeek';
import { getSixDays } from './getSixDays';
import { treatMonth, treatYear } from './treat';

export interface Week {
  year: number;
  month: number;
  monthRef: number;
  data: number[];
}

const complementLastWeek = (
  month: number,
  year: number,
  weeks: Week[]
): Week[] => {
  let yearWeek = year;
  let monthWeek = month;

  if (weeks[0].data.length < 7) {
    const lastDays = getSixDays(month - 1, year);
    monthWeek = treatMonth(month - 1);
    yearWeek = treatYear(month - 1, year);

    weeks[0].year = weeks[0].data.length === 6 ? weeks[0].year : yearWeek;
    weeks[0].month = weeks[0].data.length === 6 ? weeks[0].month : monthWeek;
    weeks[0].monthRef = month;
    weeks[0].data = [
      ...lastDays.splice(weeks[0].data.length - 1),
      ...weeks[0].data,
    ];
  }

  const length = weeks[weeks.length - 1].data.length;
  const lastPos = weeks.length - 1;
  if (length < 7) {
    const firstDays = getSixDays(month + 1, year, false);
    monthWeek = treatMonth(month + 1);
    yearWeek = treatYear(month + 1, year);

    weeks[lastPos].year =
      weeks[lastPos].data.length >= 2 ? weeks[lastPos].year : yearWeek;
    weeks[lastPos].month =
      weeks[lastPos].data.length >= 2 ? weeks[lastPos].month : monthWeek;
    weeks[lastPos].monthRef = month;

    weeks[lastPos].data = [
      ...weeks[lastPos].data,
      ...firstDays.splice(0, 7 - length),
    ];
  }

  return weeks;
};

export const weeksInMonth = (
  month: number,
  year: number,
  weeks: Week[] = [],
  day = 1,
  weekIndex = 0,
  loopFinish = false
): Week[] => {
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
  weeks.push({
    year,
    month,
    monthRef: month,
    data: week,
  });
  return weeksInMonth(month, year, weeks, day, weekIndex, weekIndex >= 6);
};
