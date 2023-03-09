import { toast } from 'react-toastify';
import authFetch from '../../axios/Intercepter';

export const viewNews = (id) => {
    return (dispatch) => {
        //nameless functions
        // Initial action dispatched
        dispatch({ type: 'START' });
        // Return promise with success and failure actions
        return authFetch.get(`/news/${id}`).then(
            news => {
                if (news.status == 200 || news.status == 201) {
                    dispatch({ type: 'VIEWNEW', payload: news.data });
                }
            },
            err => {
                toast.error("Error");
                dispatch({ type: 'FAIL', payload: err })
            }
        );
    };
};