import React from "react";
import { Link } from "react-router-dom";

const PayPalButton = () => {
  return (
    <div>
      <Link to="/deliver" style={{ textDecoration: "none" }}>
        Check Out
      </Link>
    </div>
  );
};

export default PayPalButton;
