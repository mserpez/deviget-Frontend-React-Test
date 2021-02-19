import { PostItem } from "../../../components";
import { RedditActions } from "../actions";

import { IPost } from "../../../dal/types";

export interface PostListProps {
  data: IPost[];
  openedPost?: IPost;
  readPost: (id: string) => RedditActions;
  dismissPost: (id: string) => RedditActions;
}

export function PostList({ data, dismissPost, readPost }: PostListProps) {
  return (
    <div>
      {data
        .filter((item) => !item._isDismissed)
        .map((data) => {
          const readPostHandler = () => {
            readPost(data.id);
          };
          const dismissPostHandler = () => {
            dismissPost(data.id);
          };
          return (
            <PostItem
              dismissPostHandler={dismissPostHandler}
              key={`post-id-${data.id}`}
              readPostHandler={readPostHandler}
              post={data}
            />
          );
        })}
    </div>
  );
}
