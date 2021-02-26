import Image from "react-graceful-image";
import styled from "@emotion/styled";

import loadingImg from "../../assets/loading.gif";

export enum PostImageSize {
  "sm" = "110",
  "md" = "400",
  "xl" = "700",
}

export interface PostImageProps extends PostImageBaseProps {
  url?: string;
  alt?: string;
  onImageClick?: () => void;
  loading?: boolean;
}

interface PostImageBaseProps {
  size?: PostImageSize;
}

export function PostImage({
  url,
  alt,
  onImageClick,
  size = PostImageSize.sm,
  loading = false,
}: PostImageProps) {
  if (loading) return <StyledLoadingImage alt="Loading..." src={loadingImg} />;

  return (
    <div data-testid="post-image-root" onClick={onImageClick}>
      <StyledImage src={url} width={size} alt={alt} />
    </div>
  );
}

const StyledImage = styled(Image)`
  max-height: 100%;
  margin-right: 12px;
  margin-top: 12px;
`;

const StyledLoadingImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 24px;
`;
