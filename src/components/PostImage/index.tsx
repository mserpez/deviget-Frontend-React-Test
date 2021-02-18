import styled from "@emotion/styled";

export const DEFAULT_POST_URL = "https://via.placeholder.com/115x110";
export const DEFAULT_POST_ALT = "Image placeholder";

export interface PostImageProps {
  url?: string
  alt?: string
  onImageClick?: () => void
}

export function PostImage({
  url,
  alt,
  onImageClick,
}: PostImageProps) {

  return (
    <div data-testid="post-image-root" onClick={onImageClick}>
      <StyledImage data-testid="post-image" src={url || DEFAULT_POST_URL} alt={alt} />
    </div>
  );
}

const StyledImage = styled.img`
  width: 110px;
  max-height: 100%;
  margin-right: 12px;
  margin-top: 12px;
`;