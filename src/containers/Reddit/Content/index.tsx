// Types
import { IRedditTop50DataItem } from "../../../constants/services/reddit/types";

export interface ContentProps {
    data: IRedditTop50DataItem[]
}

export default function Content(props: ContentProps) {

    const { data } = props;

    console.log(">>>>>data", data);

    return null;
}
