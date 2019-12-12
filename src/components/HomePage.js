import React from "react";
import Header from "./common/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Dashboard Admin</h1>
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

export default HomePage;
