import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import WalletScreen from "../pages/wallet-page/wallet-screen";

const AppRoutes: React.FC = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet/:currency" element={<WalletScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
