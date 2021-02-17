import styled from "@emotion/styled"

export interface PostContentProps {
}

export function PostContent({ }: PostContentProps) {
  return (
    <StyledContainer data-testid="post-content">
      <p>Post Content</p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
`