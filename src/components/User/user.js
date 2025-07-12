import React from 'react';

function User({ user }) {
  const { _id, name, gmail, age, Address } = user;

  return (
    <div>
      <h2>User Display</h2>
      <p>ID: {_id}</p>
      <p>Name: {name}</p>
      <p>Gmail: {gmail}</p>
      <p>Age: {age}</p>
      <p>Address: {Address}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default User;
