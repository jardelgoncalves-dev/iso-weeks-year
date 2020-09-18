import { InternalError } from './error/internal-error';

export const daysInMonth = (month: number, year: number): number => {
  if (month < 0 || month > 11) throw new InternalError('Error: invalid month!');

  return 32 - new Date(year, month, 32).getDate();
};
