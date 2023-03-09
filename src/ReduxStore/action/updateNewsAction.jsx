import { toast } from 'react-toastify';
import authFetch from '../../axios/Intercepter';

export const updateNews = (data) => {
    return (dispatch) => {     //nameless functions
        // Initial action dispatched
        dispatch({ type: 'START' });
        // Return promise with success and failure actions
        return authFetch.put(`/news/${data.id}`, data).then(
            news => {
                if (news.status == 200 || news.status == 201) {
                    dispatch({ type: 'UPDATE', payload: news.data });
                    toast.success("News UPDATE Successfully");
                }
            },
            err => {
                toast.error("Error");
                dispatch({ type: 'FAIL', payload: err })
            }
        );
    };
};


