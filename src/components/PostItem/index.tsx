import styled from "@emotion/styled";

import { Text, TextFontColor, TextFontSize, Badge, PostImage } from "../";
import { Button } from "../Button";

import chevronRightImg from "../../assets/chevron-right.png";

import { IPost } from "../../dal/types";
import { useEffect } from "react";
import { getElapsedTimeHumanly } from "../../utils/helpers/time";

export interface IPostItemProps {
  post: IPost;
  readPostHandler: () => void;
  dismissPostHandler: () => void;
}

export function PostItem({
  // data
  post,
  // actions
  readPostHandler,
  dismissPostHandler,
}: IPostItemProps) {
  const timeElapsed = getElapsedTimeHumanly(post.createdAt);

  return (
    <StyledContainer data-testid="post-item">
      <StyledRowHeader>
        {post._isRead ? null : <Badge />}
        <Text label={post.author} fontSize={TextFontSize.xl} fontWeight={700} />
        <Text label={timeElapsed} fontSize={TextFontSize.md} fontWeight={700} />
      </StyledRowHeader>
      <StyledRowContent onClick={readPostHandler}>
        <PostImage url={post.photoURL} alt={post.title} />
        <Text
          label={post.title}
          fontSize={TextFontSize.md}
          fontColor={TextFontColor.lightGrey}
          block
        />
        <StyledArrowImg src={chevronRightImg} alt="right-arrow" />
      </StyledRowContent>
      <StyledRowFooter>
        <Button onClick={dismissPostHandler} label="Dismiss" />
        <StyledComments>
          <Text
            label={`${post.commentsQty} comments`}
            fontSize={TextFontSize.sm}
            fontColor={TextFontColor.orange}
          />
        </StyledComments>
      </StyledRowFooter>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #888888;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledRowContent = styled(StyledRow)`
  justify-content: space-between;
  cursor: pointer;
`;

const StyledRowHeader = styled(StyledRow)`
  align-items: center;
`;

const StyledRowFooter = styled(StyledRow)`
  align-items: center;
  justify-content: space-between;
`;

const StyledArrowImg = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  margin-right: 12px;
  cursor: pointer;
`;

const StyledComments = styled.div`
  margin-right: 12px;
`;
