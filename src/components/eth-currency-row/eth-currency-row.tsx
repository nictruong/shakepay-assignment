import React, { ReactElement, useMemo } from "react";
import ETHLogo from "../../assets/currency eth.svg";
import { useRates } from "../../hooks/useRates";
import { useTransactions } from "../../hooks/useTransactions";
import { cryptoWithCommas } from "../../utils/utils";
import CurrencyRow from "../currency-row/currency-row";

const EthCurrencyRow: React.FC = (): ReactElement => {
  const { data: transactions } = useTransactions();
  const { data: rates } = useRates();

  const balance = useMemo(() => {
    return (
      transactions?.reduce((total, transaction) => {
        if (transaction.type === "conversion") {
          if (transaction.to?.currency === "ETH") {
            total += transaction.to.amount;
          } else if (transaction.from?.currency === "ETH") {
            total -= transaction.from.amount;
          }
        } else if (transaction.currency === "ETH") {
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
      icon={ETHLogo}
      label="Bitcoin"
      amount={balance}
      amountFormatter={(amount: number) => {
        return cryptoWithCommas(amount);
      }}
      rate={rates?.ETH_CAD}
      dollarAmount={balance * rates?.ETH_CAD}
    />
  );
};

export default EthCurrencyRow;
