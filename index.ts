export const getColor = (): string =>
  `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
