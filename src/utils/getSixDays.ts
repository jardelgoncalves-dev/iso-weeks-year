import { daysInMonth } from './daysInMonth';

export const getSixDays = (
  month: number,
  year: number,
  last = true
): number[] => {
  if (!last) return [1, 2, 3, 4, 5, 6];

  const lastDay = daysInMonth(month, year);
  return [
    lastDay - 5,
    lastDay - 4,
    lastDay - 3,
    lastDay - 2,
    lastDay - 1,
    lastDay,
  ];
};
