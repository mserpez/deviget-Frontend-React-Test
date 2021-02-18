import { useSelector } from 'react-redux';
import { RootState } from '../../providers/redux/rootReducer';

export function usePostList() {
    const { data: { dismissedList, readList, top50 } } = useSelector((store: RootState) => store.REDDIT);

    // Add _isDismissed, and _isRead props to list item.
    return top50.map((item) => {
        item.data._isDismissed = dismissedList.includes(item.data.id)
        item.data._isRead = readList.includes(item.data.id)
        return item;
    });
}

export function useOpenedPost() {
    const { data: { top50 }, openedId } = useSelector((store: RootState) => store.REDDIT);

    // Add _isDismissed, and _isRead props to list item.
    const openedPost = top50.find((item) => item.data.id === openedId);

    return openedPost || undefined;
}