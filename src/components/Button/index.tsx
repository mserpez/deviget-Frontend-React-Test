import styled from "@emotion/styled";

export interface ButtonProps extends ButtonBaseProps {
  onClick: () => void;
  label: string;
}

interface ButtonBaseProps {
  block?: boolean;
}

export function Button({ onClick, label, block = false }: ButtonProps) {
  return (
    <StyledButton data-testid="button" onClick={onClick} block={block}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-family: Helvetica;
  width: ${({ block }: ButtonBaseProps) => block ? '100%' : 'auto'};
  border: none;
  text-shadow: none;
  background: transparent;
  color: orange;
  font-size: 18px;
  cursor: pointer;
`;
