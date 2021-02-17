import styled from "@emotion/styled";

export interface ButtonProps {
  onClick: () => void;
  label: string;
}

export function Button({ onClick, label }: ButtonProps) {
  return (
    <StyledButton data-testid="button" onClick={onClick}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-family: Helvetica;
  width: 100%;
  border: none;
  text-shadow: none;
  background: transparent;
  color: orange;
  font-size: 18px;
`;
