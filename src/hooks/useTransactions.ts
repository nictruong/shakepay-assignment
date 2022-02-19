import { useQuery } from "react-query";
import { getTransactions } from "../api/api";
import { Transaction } from "../models/models";

export const useTransactions = () => {
  const transactionsData = useQuery<Transaction[]>(
    "transactions",
    getTransactions
  );

  return transactionsData;
};
