import * as React from "react";

import { Media, Button } from "reactstrap";

export const UserCard = ({ name, avatar, onLogout }) => (
  <Media className="d-flex align-items-center">
    <Media left className="m-2">
      <Media object className="rounded-circle" src={avatar} alt={name} width={32} height={32} />
    </Media>
    <Media body className="pr-3">
      {name}
    </Media>
    <Media body>
      <Button color="danger" onClick={onLogout}>
        Logout
      </Button>
    </Media>
  </Media>
);
