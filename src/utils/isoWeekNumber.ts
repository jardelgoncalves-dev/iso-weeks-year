import { InternalError } from './error/internal-error';

export const isoWeekNumber = (date: Date): number => {
  const isDateValid = date && date instanceof Date && !isNaN(date.valueOf());

  if (!isDateValid) {
    throw new InternalError('Error: invalid date!');
  }

  const copyDate: Date = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  copyDate.setUTCDate(copyDate.getUTCDate() + 4 - (copyDate.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(copyDate.getUTCFullYear(), 0, 1));

  return Math.ceil(
    ((copyDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
};
