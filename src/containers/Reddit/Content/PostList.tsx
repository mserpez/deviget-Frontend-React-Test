import { PostItem } from "../../../components";
import { RedditActions } from "../actions";

import { IPost } from "../../../dal/types";

export interface PostListProps {
  data: IPost[];
  openedPost?: IPost;
  readPostHandler: (id: string) => () => void;
  dismissPost: (id: string) => RedditActions;
}

export function PostList({
  data,
  dismissPost,
  readPostHandler,
}: PostListProps) {
  return (
    <div>
      {data
        .filter((item) => !item._isDismissed)
        .map((data) => {
          const dismissPostHandler = () => {
            dismissPost(data.id);
          };
          return (
            <PostItem
              dismissPostHandler={dismissPostHandler}
              key={`post-id-${data.id}`}
              readPostHandler={readPostHandler(data.id)}
              post={data}
            />
          );
        })}
    </div>
  );
}
