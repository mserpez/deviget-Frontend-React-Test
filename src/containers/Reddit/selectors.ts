import { useSelector } from 'react-redux';
import { RootState } from '../../providers/redux/rootReducer';

export function usePostList() {
    const { data: { dismissedList, readList, top50 } } = useSelector((store: RootState) => store.REDDIT);

    // Add _isDismissed, and _isRead props to list item.
    return top50.map((item) => {
        item._isDismissed = dismissedList.includes(item.id)
        item._isRead = readList.includes(item.id)
        return item;
    });
}

export function useOpenedPost() {
    const { data: { top50 }, openedId } = useSelector((store: RootState) => store.REDDIT);

    const openedPost = top50.find((item) => item.id === openedId);

    return openedPost || undefined;
}

export function useIsServiceLoading() {
    const { service: { loading } } = useSelector((store: RootState) => store.REDDIT);

    return loading;
}

export function useServiceError() {
    const { service: { error } } = useSelector((store: RootState) => store.REDDIT);

    return error;
}