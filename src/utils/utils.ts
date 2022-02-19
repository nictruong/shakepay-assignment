export const formatDollarAmount = (amount: number) => {
  return Math.round(amount * 100) / 100;
};

export const cryptoWithCommas = (x: number) => {
  return x.toFixed(4).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const dollarsWithCommas = (x: number) => {
  return x.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
