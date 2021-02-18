// Types
import styled from "@emotion/styled";
import { Menu, PostContent } from "../../../components";
import { IRedditTop50DataItem } from "../../../constants/services/reddit/types";
import { RedditActions } from "../actions";
import { PostList } from "./PostList";

export interface ContentProps {
  data: IRedditTop50DataItem[];
  openedPost?: IRedditTop50DataItem;
  readPost: (id: string) => RedditActions
  dismissPost: (id: string) => RedditActions
}

export default function Content({ openedPost, ...props }: ContentProps) {

  const onDismissAllHandler = () => { };

  return (
    <StyledContent>
      <Menu
        title="Reddit Posts"
        button={{
          label: "Dismiss All",
          onClick: onDismissAllHandler,
        }}
        content={<PostList {...props} />}
      />
      {openedPost && <PostContent post={openedPost} />}
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
`;
