import React, { ReactElement } from "react";
import { dollarsWithCommas, formatDollarAmount } from "../../utils/utils";
import "./currency-row.css";

interface CurrencyRowProps {
  icon: any;
  label: string;
  amount: number;
  rate?: number;
  dollarAmount?: number;
  amountFormatter?: (amount: number) => string;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({
  icon,
  label,
  amount,
  rate,
  dollarAmount,
  amountFormatter,
}): ReactElement => {
  return (
    <div className="currency-row">
      <div className="currency-left">
        <div className="currency-icon">
          <img src={icon} alt="currency icon" width={35} />
        </div>
        <div className="currency-label">
          <div>{label}</div>
          {rate && (
            <div className="crypto-data">${dollarsWithCommas(rate)}</div>
          )}
        </div>
      </div>
      <div className="currency-label">
        <div>{amountFormatter ? amountFormatter(amount) : amount}</div>
        {dollarAmount && (
          <div className="crypto-data">
            ${dollarsWithCommas(formatDollarAmount(dollarAmount))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyRow;
