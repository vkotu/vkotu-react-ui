import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  font-size: 24px;
  margin: 5px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    color: white;
  }
  background-color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
`;

const ButtonComp = (props) => {
  return (
    <Button primary={props.isPrimary}>
      This is {props.isPrimary ? "primary" : "secondary"} button
    </Button>
  );
};

export default ButtonComp;
