import { useSelector } from 'react-redux';
import { RootState } from '../../providers/redux/rootReducer';

export function usePostList() {
    const { data } = useSelector((store: RootState) => store.REDDIT);

    return data.top50;
}