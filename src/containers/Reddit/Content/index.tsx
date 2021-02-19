// Types
import styled from "@emotion/styled";
import { Menu, PostContent } from "../../../components";
import {
  IDismissAllPostsAction,
  IDismissPostAction,
  IReadPostAction,
} from "../actions";
import { PostList } from "./PostList";

import { IPost } from "../../../dal/types";

export interface ContentProps {
  data: IPost[];
  openedPost?: IPost;
  readPost: (id: string) => IReadPostAction;
  dismissPost: (id: string) => IDismissPostAction;
  dismissAllPosts: () => IDismissAllPostsAction;
}

export default function Content({
  openedPost,
  dismissAllPosts,
  ...props
}: ContentProps) {
  return (
    <StyledContent>
      <Menu
        title="Reddit Posts"
        button={{
          label: "Dismiss All",
          onClick: dismissAllPosts,
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
