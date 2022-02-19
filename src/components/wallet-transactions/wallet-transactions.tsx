import React, { ReactElement } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { currencyMap } from "../../models/models";
import TransactionRow from "../transaction-row/transaction-row";

import "./wallet-transactions.css";

interface WalletTransactionsProps {
  currency: "dollars" | "bitcoin" | "ethereum" | undefined;
}

const WalletTransactions: React.FC<WalletTransactionsProps> = ({
  currency,
}): ReactElement => {
  const { data: transactions } = useTransactions();

  const currencySymbol = currencyMap[currency || "dollars"];

  console.log(currencySymbol);

  return (
    <div className="transactions-container">
      <div className="transactions-title">Transactions</div>
      <div>
        {transactions?.slice(0, 50)?.map((transaction) => {
          return <TransactionRow transaction={transaction} />;
        })}
      </div>
    </div>
  );
};

export default WalletTransactions;
