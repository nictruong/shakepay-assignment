import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import WalletHeader from "../../wallet-header/wallet-header";
import WalletTransactions from "../../wallet-transactions/wallet-transactions";

const WalletScreen: React.FC = (): ReactElement => {
  const { currency } = useParams();

  return (
    <>
      <WalletHeader currency={currency} />
      <WalletTransactions currency={currency as any} />
    </>
  );
};

export default WalletScreen;
