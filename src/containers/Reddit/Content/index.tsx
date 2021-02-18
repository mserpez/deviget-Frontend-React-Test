// Types
import styled from "@emotion/styled";
import { Menu, PostItem, PostContent } from "../../../components";
import { IRedditTop50DataItem } from "../../../constants/services/reddit/types";
import { PostList } from "./PostList";

export interface ContentProps {
  data: IRedditTop50DataItem[];
}

export default function Content(props: ContentProps) {
  const { data } = props;

  const onDismissAllHandler = () => {};

  return (
    <StyledContent>
      <Menu
        title="Reddit Posts"
        button={{
          label: "Dismiss All",
          onClick: onDismissAllHandler,
        }}
        content={<PostList data={data} />}
      />
      <PostContent />
    </StyledContent>
  );
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
`;
