import Image from "react-graceful-image";
import styled from "@emotion/styled";

export enum PostImageSize {
  "sm" = "110",
  "md" = "400",
  "xl" = "700",
}

export interface PostImageProps extends PostImageBaseProps {
  url?: string;
  alt?: string;
}

interface PostImageBaseProps {
  size?: PostImageSize;
}

export function PostImage({
  url,
  alt,
  size = PostImageSize.sm,
}: PostImageProps) {
  return (
    <div data-testid="post-image-root">
      {/**
       *  noLazyLoad: TODO: Check this prop/component, lazy load is not working fine sometimes.
       */}
      <StyledImage src={url} width={size} alt={alt} noLazyLoad />
    </div>
  );
}

const StyledImage = styled(Image)`
  max-height: 100%;
  margin-right: 12px;
  margin-top: 12px;
  @media (max-width: 776px) {
    width: 90%;
    margin-left: 5%;
  }
`;
