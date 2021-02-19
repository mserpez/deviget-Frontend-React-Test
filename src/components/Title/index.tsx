import styled from "@emotion/styled";

export interface TitleProps extends TitleBaseProps {
  label: string;
}

interface TitleBaseProps {
  inverted?: boolean;
}

export function Title({ label, inverted }: TitleProps) {
  return (
    <StyledTitle data-testid="title" inverted={inverted}>
      {label}
    </StyledTitle>
  );
}

const StyledTitle = styled.h1`
  font-family: Helvetica;
  color: ${({ inverted }: TitleBaseProps) =>
    inverted ? "#333333" : "#FAFAFA"};
  padding: 5px;
  text-align: center;
`;
