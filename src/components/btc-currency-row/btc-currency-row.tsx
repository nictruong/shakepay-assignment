import React, { ReactElement, useMemo } from "react";
import BTCLogo from "../../assets/currency btc.svg";
import { useRates } from "../../hooks/useRates";
import { useTransactions } from "../../hooks/useTransactions";
import { cryptoWithCommas } from "../../utils/utils";
import CurrencyRow from "../currency-row/currency-row";

const BtcCurrencyRow: React.FC = (): ReactElement => {
  const { data: transactions } = useTransactions();
  const { data: rates } = useRates();

  console.log(transactions);

  const balance = useMemo(() => {
    return (
      transactions?.reduce((total, transaction) => {
        if (transaction.type === "conversion") {
          if (transaction.to?.currency === "BTC") {
            total += transaction.to.amount;
          } else if (transaction.from?.currency === "BTC") {
            total -= transaction.from.amount;
          }
        } else if (transaction.currency === "BTC") {
          if (transaction.direction === "credit") {
            total += transaction.amount;
          } else if (transaction.direction === "debit") {
            total -= transaction.amount;
          }
        }

        return total;
      }, 0) || 0
    );
  }, [transactions]);

  return (
    <CurrencyRow
      icon={BTCLogo}
      label="Bitcoin"
      amount={balance}
      amountFormatter={(amount: number) => {
        return cryptoWithCommas(amount);
      }}
      rate={rates?.BTC_CAD}
      dollarAmount={balance * rates?.BTC_CAD}
    />
  );
};

export default BtcCurrencyRow;
