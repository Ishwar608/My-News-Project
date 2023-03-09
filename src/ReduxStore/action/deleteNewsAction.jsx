import { toast } from 'react-toastify';
import authFetch from '../../axios/Intercepter';

export const deleteNews = (id) => {
    return (dispatch) => {     //nameless functions
        // Initial action dispatched
        dispatch({ type: 'START' });
        // Return promise with success and failure actions
        return authFetch.delete(`/news/${id}`).then(
            news => {
                if (news.status == 200 || news.status == 201) {
                    dispatch({ type: 'DELETE', payload: news.data });
                    toast.success("News Deleted Successfully");
                }
            },
            err => {
                toast.error("Error");
                dispatch({ type: 'FAIL', payload: err })
            }
        );
    };
};