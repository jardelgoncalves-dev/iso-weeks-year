export const treatYear = (month: number, year: number): number => {
  return month > 11 ? year + 1 : month < 0 ? year - 1 : year;
};

export const treatMonth = (month: number): number => {
  return month > 11 ? 0 : month < 0 ? 11 : month;
};
