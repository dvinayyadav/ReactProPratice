import React from 'react';

const UserComp = (props) => {
  if (props.user === "ARUN") {
    throw new Error("NOT A User");
  }

  return (
    <div>
      <h2>{props.user} is a user</h2>
    </div>
  );
};

export default UserComp;
