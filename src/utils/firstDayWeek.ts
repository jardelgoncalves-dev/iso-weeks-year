import { InternalError } from './error/internal-error';

export const firstDayWeek = (month: number, year: number): number => {
  if (month < 0 || month > 11) throw new InternalError('Error: invalid month!');

  return new Date(year, month).getDay();
};
