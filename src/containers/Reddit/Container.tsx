// Vendor
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Actions
import {
  fetchPostsAction,
  readPostAction,
  dismissPostAction,
  dismissAllPostsAction,
} from "./actions";
// Internal container components
import Content from "./Content";
// Reddit Selectors
import { useOpenedPost, usePostList, useIsServiceLoading, useServiceError } from "./selectors";

export function Reddit() {
  const dispatch = useDispatch();
  const data = usePostList();
  const openedPost = useOpenedPost();
  const isServiceLoading = useIsServiceLoading();
  const serviceError = useServiceError();

  // Is in charge to mark a post as read, to hide Badge.
  const readPost = (id: string) => dispatch(readPostAction(id));

  // Is in charge to set dismissed flag, to filter and not show it.
  const dismissPost = (id: string) => dispatch(dismissPostAction(id));

  // Dismiss all posts.
  const dismissAllPosts = () => dispatch(dismissAllPostsAction());

  // Component mount
  useEffect(() => {
    // Bind dispatch to action
    const fetchData = () => dispatch(fetchPostsAction());
    // Dispatch fetch action
    fetchData();
  }, [dispatch]);

  return (
    <Content
      data={data}
      openedPost={openedPost}
      readPost={readPost}
      dismissPost={dismissPost}
      dismissAllPosts={dismissAllPosts}
      isServiceLoading={isServiceLoading}
      serviceError={serviceError}
    />
  );
}
