import styled from '@emotion/styled'

export interface TitleProps {
  label: string;
}

export function Title({ label }: TitleProps) {
  return <StyledTitle data-testid="title">{label}</StyledTitle>;
}

const StyledTitle = styled.h1`
  font-family: Helvetica;
  color: white;
  padding: 16px;
  text-align: center;
`