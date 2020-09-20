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

  const dayn = (date.getDay() + 6) % 7;
  copyDate.setDate(copyDate.getDate() - dayn + 3);

  const firstThursday = copyDate.valueOf();
  copyDate.setMonth(0, 1);
  if (copyDate.getDay() !== 4) {
    copyDate.setMonth(0, 1 + ((4 - copyDate.getDay() + 7) % 7));
  }

  return 1 + Math.ceil((firstThursday - copyDate.valueOf()) / 604800000);
};
