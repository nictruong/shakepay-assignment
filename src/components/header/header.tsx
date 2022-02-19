import React, { ReactElement, useMemo } from "react";
import Logo from "../../assets/logo.svg";
import { useRates } from "../../hooks/useRates";
import { useTransactions } from "../../hooks/useTransactions";
import { Transaction } from "../../models/models";
import { formatDollarAmount, dollarsWithCommas } from "../../utils/utils";

import "./header.css";

const Header: React.FC = (): ReactElement => {
  const { data: transactions } = useTransactions();
  const { data: rates } = useRates();

  const balance = useMemo(() => {
    if (!transactions || !rates) {
      return 0.0;
    }

    return transactions.reduce((total: number, transaction: Transaction) => {
      if (transaction.currency === "CAD") {
        if (transaction.direction === "credit") {
          total += transaction.amount;
        } else if (transaction.direction === "debit") {
          total -= transaction.amount;
        }
      } else if (transaction.currency === "BTC") {
        if (transaction.direction === "credit") {
          total += transaction.amount * rates.BTC_CAD;
        } else if (transaction.direction === "debit") {
          total -= transaction.amount * rates.BTC_CAD;
        }
      } else if (transaction.currency === "ETH") {
        if (transaction.direction === "credit") {
          total += transaction.amount * rates.ETH_CAD;
        } else if (transaction.direction === "debit") {
          total -= transaction.amount * rates.ETH_CAD;
        }
      }

      return total;
    }, 0);
  }, [transactions, rates]);

  const formattedBalance = dollarsWithCommas(formatDollarAmount(balance));

  return (
    <div className="header">
      <div className="header-content">
        <img src={Logo} alt="logo" height={50} />
        <div className="balance">
          <div className="dollar-sign">$</div>
          <div className="balance-amount">{formattedBalance}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
