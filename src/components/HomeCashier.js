import React from "react";
import HeaderCashier from "./common/HeaderCashier";

function HomeCashier() {
  return (
    <div>
      <HeaderCashier />
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Dashboard Cashier</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how fixed to top
            navbar works. As you scroll, it will remain fixed to the top of your
            browser’s viewport.
          </p>
        </div>
      </main>
    </div>
  );
}

export default HomeCashier;
