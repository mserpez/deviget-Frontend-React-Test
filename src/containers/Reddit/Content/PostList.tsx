import { ContentProps } from ".";
import { PostItem } from "../../../components";

export interface PostListProps extends ContentProps { }

export function PostList({ data, dismissPost, readPost }: PostListProps) {

    return (
        <div>
            {data.filter(item => !item.data._isDismissed).map(
                ({
                    data: {
                        _isRead,
                        author,
                        created_utc,
                        id,
                        num_comments,
                        thumbnail,
                        title,
                        url
                    },
                }) => {
                    const readPostHandler = () => {
                        readPost(id)
                    }
                    const dismissPostHandler = () => {
                        dismissPost(id)
                    }
                    return (
                        <PostItem
                            author={author}
                            createdDate={created_utc}
                            dismissPostHandler={dismissPostHandler}
                            key={`post-id-${id}`}
                            numComments={num_comments}
                            photoURL={thumbnail}
                            id={id}
                            read={!!_isRead}
                            readPostHandler={readPostHandler}
                            title={title}
                        />
                    )
                }
            )}
        </div>
    );
}
