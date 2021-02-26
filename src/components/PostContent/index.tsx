import styled from "@emotion/styled";

import { PostImage, PostImageSize } from "../PostImage";
import { Text, TextFontColor } from "../Text";
import { Title } from "../Title";

import { IPost } from "../../dal/types";

export interface PostContentProps {
  post: IPost;
}

export function PostContent({ post }: PostContentProps) {
  // TODO: Ability to difference between img
  // and video post, to show the correct one.
  return (
    <StyledContainer data-testid="post-content">
      <Title label={post.author} inverted />
      <PostImage url={post.photoURL} size={PostImageSize.md} />
      <Text label={post.title} fontColor={TextFontColor.darkGrey} />
    </StyledContainer>
  );
}

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
