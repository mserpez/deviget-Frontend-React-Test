import styled from "@emotion/styled";

import { Button, ButtonProps } from "../Button";
import { Title } from "../Title";

export interface MenuProps {
  title?: string;
  content?: React.ReactElement;
  button?: ButtonProps;
  isOpen?: boolean;
}

const FOOTER_HEIGHT = 50;
const HEADER_HEIGHT = 80;

export function Menu({ title, button, content, isOpen = true }: MenuProps) {
  return (
    <StyledMenu data-testid="menu-root" isOpen={isOpen}>
      {title && (
        <StyledMenuHeader>
          <Title label={title} />
        </StyledMenuHeader>
      )}
      {content && <StyledMenuContent>{content}</StyledMenuContent>}
      {button && (
        <StyledMenuFooter>
          <Button block {...button} />
        </StyledMenuFooter>
      )}
    </StyledMenu>
  );
}

interface IStyledMenu {
  isOpen: boolean;
}

// TODO: Create theme provider with breakpoints included.
// TODO: Check this any. I set this any type to send prop
// to div element and receive on emotion styled component.
const StyledMenu: any = styled.div`
  background: #333333;
  width: 33.33%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 991px) {
    width: 50%;
  }

  @media (max-width: 776px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: ${({ isOpen }: IStyledMenu) => (isOpen ? "0" : "-100%")};
  }
`;

const StyledMenuHeader = styled.div`
  height: ${HEADER_HEIGHT}px;
`;

const StyledMenuContent = styled.div`
  padding-left: 6px;
  padding-right: 6px;
  display: flex;
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledMenuFooter = styled.div`
  height: ${FOOTER_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
