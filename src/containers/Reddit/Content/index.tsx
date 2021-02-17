// Types
import styled from "@emotion/styled";
import { Menu, MenuItem, PostContent } from "../../../components";
import { IRedditTop50DataItem } from "../../../constants/services/reddit/types";

export interface ContentProps {
    data: IRedditTop50DataItem[]
}

export default function Content(props: ContentProps) {

    const { data } = props;

    console.log(">>>>>data", data);

    return (
        <StyledContent>
            <Menu title="Reddit Posts">
                <MenuItem />
            </Menu>
            <PostContent />
        </StyledContent>
    )
}

const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
`;