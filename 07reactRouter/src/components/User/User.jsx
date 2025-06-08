import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { myId } = useParams();
  return <div>User : {myId}</div>;
}

export default User;
