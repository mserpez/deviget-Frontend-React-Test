import styled from "@emotion/styled"
import { Title } from "../Title"

export interface MenuProps {
  title?: string
  children?: React.ReactChild | React.ReactChild[]
}

export function Menu({ title, children }: MenuProps) {
  return (
    <StyledMenu data-elm-id="menu">
      {title && <Title label={title} />}
      {children}
    </StyledMenu>
  )
}

// TODO: Create theme provider with breakpoints included.
const StyledMenu = styled.div`
  background: #333333;
  width: 20%;
  height: 100vh;

  @media (max-width: 991px) {
    width: 50%;
  }

  @media (max-width: 776px) {
    width: 75%;
  }
`