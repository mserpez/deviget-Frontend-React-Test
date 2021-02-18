import styled from "@emotion/styled";

export interface BadgeProps { }

export function Badge({ }: BadgeProps) {
  return <StyledBadge data-testid="badge" >A</StyledBadge>;
}

const StyledBadge = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  background: #2196f3;
  border-radius: 50%;
`;
