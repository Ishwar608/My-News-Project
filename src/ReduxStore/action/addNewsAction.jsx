import { toast } from 'react-toastify';
import authFetch from '../../axios/Intercepter';

export const addNews = (data) => {
    return (dispatch) => {     //nameless functions
        // Initial action dispatched
        dispatch({ type: 'START' });
        // Return promise with success and failure actions
        return authFetch.post("/news", data).then(
            news => {
                if (news.status == 200 || news.status == 201) {
                    dispatch({ type: 'ADD', payload: news.data });
                    toast.success("News Add Successfully");
                }
            },
            err => {
                toast.error("Error");
                dispatch({ type: 'FAIL', payload: err })
            }
        );
    };
};


