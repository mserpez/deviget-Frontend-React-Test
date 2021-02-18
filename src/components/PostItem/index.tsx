import styled from "@emotion/styled";
import { Text, TextFontColor, TextFontSize, Badge, PostImage } from "../";
import chevronRightImg from '../../assets/chevron-right.png';
import { Button } from "../Button";

export interface PostItemProps {
  author: string;
  createdDate: number;
  numComments: number;
  photoURL?: string;
  read?: boolean;
  dismissed?: boolean;
  title: string;
  readPostHandler: () => void;
  dismissPostHandler: () => void;
  id: string;
}

export function PostItem({
  author,
  createdDate,
  numComments,
  photoURL,
  read = false,
  title,
  // actions
  readPostHandler,
  dismissPostHandler,
  id,
}: PostItemProps) {
  return (
    <StyledContainer data-testid="post-item">
      <StyledRowHeader>
        {read ? null : <Badge />}
        <Text
          label={author}
          fontSize={TextFontSize.xl}
          fontWeight={700}
        />
        <Text
          label={createdDate.toString()}
          fontSize={TextFontSize.md}
          fontWeight={700}
        />
      </StyledRowHeader>
      <StyledRowContent onClick={readPostHandler}>
        <PostImage
          url={photoURL}
          alt={title}
        />
        <Text
          label={title}
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
            label={`${numComments} comments`}
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
