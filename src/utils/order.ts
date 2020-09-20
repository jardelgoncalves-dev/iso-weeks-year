export function orderBy<T>(arr: T[], props: string[], orders: string[]): T[] {
  return [...arr].sort((a: T, b: T) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === 'desc'
            ? [b[prop as keyof T], a[prop as keyof T]]
            : [a[prop as keyof T], b[prop as keyof T]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
}
