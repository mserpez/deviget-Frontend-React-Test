import styled from "@emotion/styled";

export function Badge() {
  return <StyledBadge data-testid="badge" />;
}

const StyledBadge = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  background: #2196f3;
  border-radius: 50%;
`;
