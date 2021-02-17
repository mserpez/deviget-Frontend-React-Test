import styled from "@emotion/styled";
import { Button, ButtonProps } from "../Button";
import { Title } from "../Title";

export interface MenuProps {
  title?: string;
  content?: React.ReactElement;
  button?: ButtonProps;
}

const FOOTER_HEIGHT = 50;
const HEADER_HEIGHT = 50;

export function Menu({ title, button, content }: MenuProps) {
  return (
    <StyledMenu data-testid="menu-root">
      {title && (
        <StyledMenuHeader>
          <Title label={title} />
        </StyledMenuHeader>
      )}
      {content && <StyledMenuContent>{content}</StyledMenuContent>}
      {button && (
        <StyledMenuFooter>
          <Button {...button} />
        </StyledMenuFooter>
      )}
    </StyledMenu>
  );
}

// TODO: Create theme provider with breakpoints included.
const StyledMenu = styled.div`
  background: #333333;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 991px) {
    width: 50%;
  }

  @media (max-width: 776px) {
    width: 75%;
  }
`;

const StyledMenuHeader = styled.div`
  height: ${HEADER_HEIGHT}px;
`;

const StyledMenuContent = styled.div`
  display: flex;
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  overflow-x: auto;
`;

const StyledMenuFooter = styled.div`
  height: ${FOOTER_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
