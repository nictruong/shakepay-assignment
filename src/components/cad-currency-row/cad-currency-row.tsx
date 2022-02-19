import React, { ReactElement, useMemo } from "react";
import CurrencyRow from "../currency-row/currency-row";
import CADLogo from "../../assets/currency cad.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { formatDollarAmount, dollarsWithCommas } from "../../utils/utils";

const CadCurrencyRow: React.FC = (): ReactElement => {
  const { data: transactions } = useTransactions();

  const balance = useMemo(() => {
    return transactions?.reduce((total, transaction) => {
      if (transaction.direction === "credit") {
        total += transaction.amount;
      } else if (transaction.direction === "debit") {
        total -= transaction.amount;
      } else if (transaction.type === "conversion") {
        if (transaction.to?.currency === "CAD") {
          total += transaction.to.amount;
        } else if (transaction.from?.currency === "CAD") {
          total -= transaction.from.amount;
        }
      }

      return total;
    }, 0);
  }, [transactions]);

  return (
    <CurrencyRow
      icon={CADLogo}
      label="Dollars"
      amount={balance as number}
      amountFormatter={(amount: number) => {
        return dollarsWithCommas(formatDollarAmount(amount));
      }}
    />
  );
};

export default CadCurrencyRow;
