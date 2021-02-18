import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import _isEmpty from "lodash/isEmpty";

import { IRedditTop50DataItem } from "../../constants/services/reddit/types";

import { PostImage, PostImageSize } from "../PostImage";
import { Text, TextFontColor } from "../Text";
import { Title } from "../Title";

export interface PostContentProps {
  post: IRedditTop50DataItem
}

const IMG_EXTENSIONS = ['png', 'jpeg', 'jpg', 'gif'];

const IMGUR_REMOVED_LINK = 'https://i.imgur.com/removed.png';
const IMGUR_LINK = 'http://imgur.com';

function getExt(filename: string) {
  var idx = filename.lastIndexOf('.');
  // handle cases like, .htaccess, filename
  return (idx < 1) ? "" : filename.substr(idx + 1);
}

// TODO: IT'S A PAIN!!
// It's hard to get all cases. A lot of media sources.
// Move it to BFF, and format data to get 
// just needed frontend information

async function getUrl(post: IRedditTop50DataItem) {
  console.log(">>>>>post", post.data);
  let finalUrl = post.data.thumbnail;

  // Check if url has img extension
  const urlExt = getExt(post.data.url)

  if (IMG_EXTENSIONS.includes(urlExt)) {
    finalUrl = post.data.url;
  }
  // If post has no secure_media attr.
  if (_isEmpty(post.data.secure_media)) {
    // Check if it's an imgur link and it has no media information
    if (post.data.url.includes(IMGUR_LINK)) {
      finalUrl = `${post.data.url}.jpg`
    }
  }

  try {
    const imgFetchResponse = await fetch(finalUrl)
    if (imgFetchResponse.url === IMGUR_REMOVED_LINK) {
      finalUrl = post.data.thumbnail;
    }
  } catch (error) {
    // 
    console.log(">>>>>fetch err", error);
  }
  return finalUrl
}

export function PostContent({ post }: PostContentProps) {
  console.log(">>>>>post", post);

  const [previewUrl, setPreviewUrl] = useState<string>(post.data.thumbnail);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const url = await getUrl(post);
      setPreviewUrl(url);
      setLoading(false);
    })()
  }, [post])

  console.log(">>>>>loading", loading);

  // TODO: Ability to difference between img 
  // and video post, to show the correct one.
  return (
    <StyledContainer data-testid="post-content">
      <Title label={post.data.author} inverted />
      <PostImage url={previewUrl} size={PostImageSize.md} loading={loading} />
      <Text label={post.data.title} fontColor={TextFontColor.darkGrey} />
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
