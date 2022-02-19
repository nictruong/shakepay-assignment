export type Currency = "CAD" | "USD" | "BTC" | "ETH";
export type Direction = "credit" | "debit" | null;
export type Type = "peer" | "external account" | "conversion";

export interface From {
  currency: Currency;
  amount: number;
}

export interface To {
  currency: Currency;
  amount: number;
}

export interface Transaction {
  amount: number;
  createdAt: string;
  currency: Currency;
  direction: Direction;
  from?: From;
  to?: To;
  type: Type;
}

export const currencyMap = {
  dollars: "CAD",
  bitcoin: "BTC",
  ethereum: "ETH",
};
