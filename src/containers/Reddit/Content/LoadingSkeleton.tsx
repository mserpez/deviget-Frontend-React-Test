import styled from "@emotion/styled";
import Skeleton from "react-loading-skeleton";
import { useWindowSize } from "../../../utils/hooks";

const ITEM_HEIGHT = 160;
const LOGO_HEIGHT = 80;

export function LoadingSkeleton() {
  const size = useWindowSize();
  const screenWidth = size.width || 0;
  const screenHeight = size.height || 0;
  const itemsCount = (screenHeight - LOGO_HEIGHT) / ITEM_HEIGHT;

  if (screenWidth <= 776)
    return <StyledMobileLoader>Loading...</StyledMobileLoader>;

  return (
    <StyledContainer>
      <StyledMenuSk>
        <Skeleton height={`${LOGO_HEIGHT}px`} style={{ marginBottom: 12 }} />
        <Skeleton count={itemsCount - 1} height={`${ITEM_HEIGHT}px`} />
      </StyledMenuSk>
      <StyledContentSk>
        <StyledContentInner>
          <Skeleton height="200px" />
        </StyledContentInner>
      </StyledContentSk>
    </StyledContainer>
  );
}

const StyledMobileLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: #777777;
`;

const StyledContainer = styled.div`
  display: flex;c
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const StyledMenuSk = styled.div`
  flex: 1;
`;

const StyledContentSk = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentInner = styled.div`
  width: 50%;
`;
