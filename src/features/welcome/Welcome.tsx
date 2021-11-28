import logo from "../../images/logo.svg";
import styles from "./Welcome.module.css";
import React from "react";
import { Counter } from "../counter/Counter";

export function Welcome() {
  return (
    <div className={`App-body ${styles.container}`}>
      <span className={styles.welcomeText}>Welcome to the</span>
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </div>
  );
}