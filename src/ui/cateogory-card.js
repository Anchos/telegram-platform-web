import * as React from "react";

import { Badge } from "reactstrap";
import { consolidateStreamedStyles } from "styled-components";

export const CategoryCard = ({ name, count, active, onClick }) => (
  <span className="m-1" style={{ cursor: "pointer" }} onClick={onClick}>
    <Badge color={active ? "primary" : "secondary"}>
      {name} ({count})
    </Badge>
  </span>
);
