import styled from "@emotion/styled";
import { PostImage, PostImageSize } from "../PostImage";

export interface IImageModalPorps {
  close: () => void;
  url: string;
  alt: string;
}

export function ImageModal({ close, url, alt }: IImageModalPorps) {
  return (
    <StyledImageModal data-testid="image-modal">
      <StyledActionBtn onClick={close}>×</StyledActionBtn>
      <StyledActionLink href={url} download="" target="_blank">
        Downlaod
      </StyledActionLink>
      <PostImage url={url} alt={alt} size={PostImageSize.xl} />
    </StyledImageModal>
  );
}

const StyledImageModal = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000000dd;
  z-index: 1000;

  div {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

const StyledActionBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
`;

const StyledActionLink = styled.a`
  position: absolute;
  top: 30px;
  left: 15px;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
`;
