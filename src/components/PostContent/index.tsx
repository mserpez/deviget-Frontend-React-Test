import styled from "@emotion/styled";

import { PostImage, PostImageSize } from "../PostImage";
import { Text, TextFontColor } from "../Text";
import { Title } from "../Title";

import { IPost } from "../../dal/types";
import { useState } from "react";
import { ImageModal } from "../ImageModal";

export interface IPostContentProps {
  post: IPost;
  onMenuClose?: () => void;
  showClose?: boolean;
}

export function PostContent({
  post,
  onMenuClose,
  showClose = false,
}: IPostContentProps) {
  const [zoomImageUrl, setZoomImageUrl] = useState<string | null>(null);

  function setZoomImageUrlHandler() {
    setZoomImageUrl(post.photoURLBig);
  }

  function setCloseImageHandler() {
    setZoomImageUrl(null);
  }

  // TODO: Ability to difference between img
  // and video post, to show the correct one.
  return (
    <StyledContainer data-testid="post-content">
      {showClose && <StyledActionBtn onClick={onMenuClose}>×</StyledActionBtn>}
      <Title label={post.author} inverted />
      <StyledImageContainer onClick={setZoomImageUrlHandler}>
        <PostImage url={post.photoURL} size={PostImageSize.md} />
      </StyledImageContainer>
      {/** Zoom image will be available just for mobile version */}
      {zoomImageUrl && !showClose && (
        <ImageModal
          close={setCloseImageHandler}
          url={post.photoURLBig}
          alt={post.title}
        />
      )}
      <Text label={post.title} fontColor={TextFontColor.darkGrey} />
    </StyledContainer>
  );
}

const StyledImageContainer = styled.div`
  cursor: zoom-in;
`;

const StyledContainer = styled.div`
  display: flex;

  width: 66.66%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    width: 50%;
  }

  @media (max-width: 776px) {
    width: 100%;
  }

  h1 {
    justify-content: center;
  }
`;

const StyledActionBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  color: black;
  font-size: 30px;
  cursor: pointer;
`;
