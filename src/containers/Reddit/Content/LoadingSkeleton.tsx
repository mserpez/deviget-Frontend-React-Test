import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';

const ITEM_HEIGHT = 160;
const LOGO_HEIGHT = 80;
const CONTENT_HEIGHT = window.innerHeight / 3;

export function LoadingSkeleton() {

    const itemsCount = (window.innerHeight - LOGO_HEIGHT) / ITEM_HEIGHT;

    return (
        <StyledContainer>
            <StyledMenuSk>
                <Skeleton height={`${LOGO_HEIGHT}px`} style={{ marginBottom: 12 }} />
                <Skeleton count={itemsCount - 1} height={`${ITEM_HEIGHT}px`} />
            </StyledMenuSk>
            <StyledContentSk >
                <StyledContentInner>
                    <Skeleton height={`${CONTENT_HEIGHT}px`} />
                </StyledContentInner>
            </StyledContentSk>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
`

const StyledMenuSk = styled.div`
    flex: 1;
`

const StyledContentSk = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledContentInner = styled.div`
    width: 50%;
`