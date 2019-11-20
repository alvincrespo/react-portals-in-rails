import React, { useState } from "react";
import ReactDOM from "react-dom";

const NewUserForm = ({ onSave, onCancel }) => {
  const [sUser, setUser] = useState({});

  const onChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    const user = { ...sUser, [key]: value };

    setUser(user);
  };

  const onFormSave = e => {
    e.preventDefault();
    onSave(sUser);
  };

  return (
    <form onSubmit={onFormSave}>
      <div className="field">
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          onChange={onChange}
        />
      </div>
      <div className="field">
        <label htmlFor="user_dob">Birthdate</label>
        <input
          type="date"
          id="user_dob"
          name="user_birthdate"
          onChange={onChange}
        />
      </div>
      <div className="actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add User</button>
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

const FormResultsRenderer = ({ users }) => {
  if (users.length === 0) return null;

  return ReactDOM.createPortal(
    <form action="/users" acceptCharset="UTF-8" method="post">
      <input
        type="hidden"
        name="authenticity_token"
        value={document.head.querySelector('[name="csrf-token"]').content}
      ></input>
      <ul>
        {users.map(u => (
          <li key={`user/${Date.now()}`}>
            {u.user_name}
            <input
              type="text"
              name="user[name]"
              value={u.user_name}
              hidden
              readOnly
            />
            <input
              type="text"
              name="user[birthdate]"
              value={u.user_birthdate}
              hidden
              readOnly
            />
          </li>
        ))}
      </ul>
      <button type="submit">Create Users</button>
    </form>,
    document.getElementById("portal-results")
  );
};

const FormManager = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [users, setUsers] = useState([]);

  const onSave = user => {
    setUsers([user, ...users]);
    setDisplayForm(false);
  };

  const onCancel = () => {
    setDisplayForm(false);
  };

  return (
    <>
      <FormAction onClick={() => setDisplayForm(true)} />
      <FormRenderer display={displayForm} onSave={onSave} onCancel={onCancel} />
      <FormResultsRenderer users={users} />
    </>
  );
};

export default FormManager;
