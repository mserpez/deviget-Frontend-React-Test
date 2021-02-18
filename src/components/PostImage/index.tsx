import styled from "@emotion/styled";

import loadingImg from '../../assets/loading.gif';

export const DEFAULT_POST_URL = "https://via.placeholder.com/115x110";
export const DEFAULT_POST_URL_MD = "https://via.placeholder.com/400x400";
export const DEFAULT_POST_ALT = "Image placeholder";

export enum PostImageSize {
  "sm" = "110px",
  "md" = "400px",
  "xl" = "700px"
}

export interface PostImageProps extends PostImageBaseProps {
  url?: string
  alt?: string
  onImageClick?: () => void
  loading?: boolean
}

interface PostImageBaseProps {
  size?: PostImageSize
}

export function PostImage({
  url,
  alt,
  onImageClick,
  size = PostImageSize.sm,
  loading = false
}: PostImageProps) {

  const finalUrl = url || (size === PostImageSize.sm ? DEFAULT_POST_URL : DEFAULT_POST_URL_MD)

  if (loading) return <StyledLoadingImage alt="Loading..." src={loadingImg} />

  return (
    <div data-testid="post-image-root" onClick={onImageClick}>
      <StyledImage data-testid="post-image" src={finalUrl} alt={alt} size={size} />
    </div>
  );
}

const StyledImage = styled.img`
  width: ${({ size }: PostImageBaseProps) => size};
  max-height: 100%;
  margin-right: 12px;
  margin-top: 12px;
`;

const StyledLoadingImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 24px;
`;