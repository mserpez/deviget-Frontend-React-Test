// Types
import styled from "@emotion/styled";
import { Menu, PostContent } from "../../../components";

import { PostList } from "./PostList";
import { LoadingSkeleton } from "./LoadingSkeleton";

import {
  IDismissAllPostsAction,
  IDismissPostAction,
  IReadPostAction,
} from "../actions";

import { IPost } from "../../../dal/types";

export interface ContentProps {
  data: IPost[];
  openedPost?: IPost;
  readPost: (id: string) => IReadPostAction;
  dismissPost: (id: string) => IDismissPostAction;
  dismissAllPosts: () => IDismissAllPostsAction;
  isServiceLoading: boolean;
  serviceError: string | null;
}

export default function Content({
  openedPost,
  dismissAllPosts,
  serviceError,
  isServiceLoading,
  ...props
}: ContentProps) {

  if (serviceError) return <div>{serviceError}</div>
  if (isServiceLoading) return <LoadingSkeleton />

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
