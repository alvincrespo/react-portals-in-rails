import React, { useState } from "react";
import ReactDOM from "react-dom";

const FormManager = () => {
  const [, setDisplayForm] = useState(false);

  return ReactDOM.createPortal(
    <button type="button" onClick={() => setDisplayForm(true)}>
      New User
    </button>,
    document.getElementById("portal-action")
  );
};

export default FormManager;
