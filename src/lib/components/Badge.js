import React from "react";
import styled from "@emotion/styled";

const Badge = styled.span`
  padding: 5px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
  margin: 5px;
  background-color: ${(props) =>
    props.type === "success" ? "lightgreen" : "lightcoral"};
`;

const BadgeComp = (props) => {
  return (
    <>
      <Badge type={props.type}>{props.children}</Badge>
    </>
  );
};

export default BadgeComp;
