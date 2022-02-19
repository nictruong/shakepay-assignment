import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import BtcCurrencyRow from "../../btc-currency-row/btc-currency-row";
import CadCurrencyRow from "../../cad-currency-row/cad-currency-row";
import EthCurrencyRow from "../../eth-currency-row/eth-currency-row";
import Header from "../../header/header";
import "./home-page.css";

const HomePage: React.FC = (): ReactElement => {
  return (
    <>
      <Header />
      <div className="currencies">
        <Link to="/wallet/dollars" style={{ textDecoration: "none" }}>
          <CadCurrencyRow />
        </Link>
        <Link to="/wallet/bitcoin" style={{ textDecoration: "none" }}>
          <BtcCurrencyRow />
        </Link>
        <Link to="/wallet/ethereum" style={{ textDecoration: "none" }}>
          <EthCurrencyRow />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
