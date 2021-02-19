import styled from "@emotion/styled";

export function PostImageModal() {
  return (
    <div data-testid="post-image-modal">
      <StyledOverlay />
    </div>
  );
}

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #000000bb;
  top: 0;
`;
