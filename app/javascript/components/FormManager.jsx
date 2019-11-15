import React, { useState } from "react";
import ReactDOM from "react-dom";

const NewUserForm = ({ onSave, onCancel }) => {
  return (
    <form>
      <div class="field">
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" />
      </div>
      <div class="field">
        <label htmlFor="user_dob">Birthdate</label>
        <input type="date" id="user_dob" />
      </div>
      <div class="actions">
        <button type="button">Cancel</button>
        <button type="submit">Create User</button>
      </div>
    </form>
  );
};

const FormAction = ({ onClick }) =>
  ReactDOM.createPortal(
    <button type="button" onClick={onClick}>
      New User
    </button>,
    document.getElementById("portal-action")
  );

const FormRenderer = ({ display, onSave, onCancel }) => {
  if (!display) return null;

  return ReactDOM.createPortal(
    <NewUserForm onSave={onSave} onCancel={onCancel} />,
    document.getElementById("portal-form")
  );
};

const FormManager = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const onSave = () => {
    // do something
  };

  const onCancel = () => {
    // do something
  };

  return (
    <>
      <FormAction onClick={() => setDisplayForm(true)} />
      <FormRenderer display={displayForm} onSave={onSave} onCancel={onCancel} />
    </>
  );
};

export default FormManager;
