import React from "react";
import ReactDOM from "react-dom";

const FormManager = () =>
  ReactDOM.createPortal(<p>Hi!</p>, document.getElementById("portal"));

export default FormManager;
