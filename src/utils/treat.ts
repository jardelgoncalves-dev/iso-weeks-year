export const treatYear = (month: number, year: number): number => {
  return month >= 12 ? year + 1 : month <= -1 ? year - 1 : year;
};

export const treatMonth = (month: number): number => {
  return month >= 12 ? 0 : month <= -1 ? 12 : month;
};
