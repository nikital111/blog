import React from "react";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Router from "../../config/Router";
import styles from "./styles.module.scss";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.page}>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
