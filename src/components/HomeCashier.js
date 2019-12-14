import React from "react";
import HeaderCustomer from "./common/HeaderCustomer";

function HomeCashier() {
  return (
    <div>
      <HeaderCustomer />
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Dashboard Cshier</h1>
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
