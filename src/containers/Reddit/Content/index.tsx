// Types
import styled from "@emotion/styled";
import { Menu, PostContent } from "../../../components";

import { PostList } from "./PostList";
import { LoadingSkeleton } from "./LoadingSkeleton";

import {
  IDismissAllPostsAction,
  IDismissPostAction,
  IReadPostAction,
  IToggleMenuAction,
} from "../actions";

import { IPost } from "../../../dal/types";
import { useWindowSize } from "../../../utils/hooks";

export interface ContentProps {
  data: IPost[];
  openedPost?: IPost;
  readPost: (id: string) => IReadPostAction;
  dismissPost: (id: string) => IDismissPostAction;
  dismissAllPosts: () => IDismissAllPostsAction;
  toggleMenu: (isOpen: boolean) => IToggleMenuAction;
  isMenuOpen: boolean;
  isServiceLoading: boolean;
  serviceError: string | null;
}

export default function Content({
  openedPost,
  dismissAllPosts,
  serviceError,
  isServiceLoading,
  isMenuOpen,
  toggleMenu,
  readPost,
  ...props
}: ContentProps) {
  const { isMobile } = useWindowSize();

  if (serviceError) return <div>{serviceError}</div>;
  if (isServiceLoading) return <LoadingSkeleton />;

  function openMenuHandler() {
    return toggleMenu(true);
  }

  const readPostHandler = (id: string) => () => {
    readPost(id);
    toggleMenu(false);
  };

  const showCloseMenuButton = !isMenuOpen && isMobile;

  return (
    <StyledContent>
      <Menu
        title="Reddit Posts"
        button={{
          label: "Dismiss All",
          onClick: dismissAllPosts,
        }}
        content={<PostList {...props} readPostHandler={readPostHandler} />}
        isOpen={isMenuOpen}
      />
      {openedPost && (
        <PostContent
          post={openedPost}
          onMenuClose={openMenuHandler}
          showClose={showCloseMenuButton}
        />
      )}
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
`;
