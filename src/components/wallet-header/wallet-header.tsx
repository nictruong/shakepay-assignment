import React, { ReactElement } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import {
  capitalize,
  cryptoWithCommas,
  dollarsWithCommas,
  formatDollarAmount,
} from "../../utils/utils";

import "./wallet-header.css";

interface WallerHeaderProps {
  currency: string | undefined;
}

const WalletHeader: React.FC<WallerHeaderProps> = ({
  currency,
}): ReactElement => {
  const { data: transactions } = useTransactions();

  const balance = React.useMemo(() => {
    if (!transactions) return 0;

    return transactions.reduce((total, transaction) => {
      if (transaction.direction === "credit") {
        total += transaction.amount;
      } else if (transaction.direction === "debit") {
        total -= transaction.amount;
      }

      return total;
    }, 0);
  }, [transactions]);

  let formattedBalance = "";

  if (currency === "dollars") {
    formattedBalance = dollarsWithCommas(formatDollarAmount(balance));
  } else if (currency === "bitcoin" || currency === "ethereum") {
    formattedBalance = cryptoWithCommas(balance);
  }

  return (
    <div className="wallet-header">
      {
        <div className="wallet-currency-label">
          {capitalize(currency || "")}
        </div>
      }
      <div className="wallet-balance">
        <div>Balance</div>
        <div>{formattedBalance}</div>
      </div>
    </div>
  );
};

export default WalletHeader;
