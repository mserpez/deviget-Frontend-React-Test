import styled from "@emotion/styled";
import { IRedditTop50DataItem } from "../../constants/services/reddit/types";
import { PostImage, PostImageSize } from "../PostImage";
import { Text, TextFontColor } from "../Text";
import { Title } from "../Title";

export interface PostContentProps {
  post: IRedditTop50DataItem
}


export function PostContent({ post: { data } }: PostContentProps) {

  return (
    <StyledContainer data-testid="post-content">
      <Title label={data.author} inverted />
      <PostImage url={data.secure_media?.oembed.provider_url} size={PostImageSize.md} />
      <Text label={data.title} fontColor={TextFontColor.darkGrey} />
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
