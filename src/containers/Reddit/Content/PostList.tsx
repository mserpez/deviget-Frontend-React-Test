import { useState } from "react";
import { PostItem } from "../../../components";
import { IRedditTop50DataItem } from "../../../constants/services/reddit/types";

export interface PostListProps {
    data: IRedditTop50DataItem[];
}

export function PostList({ data }: PostListProps) {

    return (
        <div>
            {data.map(
                ({
                    data: { id, author, created_utc, thumbnail, title, num_comments },
                }) => (
                    <PostItem
                        author={author}
                        createdDate={created_utc}
                        key={`post-id-${id}`}
                        numComments={num_comments}
                        photoURL={thumbnail}
                        title={title}
                    />
                )
            )}
        </div>
    );
}
