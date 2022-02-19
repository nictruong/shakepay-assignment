import React, { ReactElement, useMemo } from "react";
import { Transaction } from "../../models/models";
import CashInIcon from "../../assets/cashin.svg";
import CashOutIcon from "../../assets/cashout.svg";
import ExchangeIcon from "../../assets/exchange.svg";

import "./transaction-row.css";

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = ({
  transaction,
}): ReactElement => {
  const icon = useMemo(() => {
    if (transaction.direction === "credit") {
      return CashInIcon;
    } else if (transaction.direction === "debit") {
      return CashOutIcon;
    } else if (transaction.type === "conversion") {
      return ExchangeIcon;
    }
  }, [transaction]);

  return (
    <div className="transaction-row-container">
      <div>
        <img src={icon} alt="transaction icon" />
      </div>
      <div>{transaction.amount}</div>
    </div>
  );
};

export default TransactionRow;
