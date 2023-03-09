import { toast } from 'react-toastify';
import authFetch from '../../axios/Intercepter';

export  const getData = (page,limmit,search) => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: 'START' });

        let url = `/news?page=${page}&p=${page}&limit=${limmit}&search=${search}`

        if(page == 1)
        {
          //as we do not have the total_record property from the api hence default we are calling with all data.
          url = `/news?page=${page}&p=${page}&search=${search}`
       
        }
      // Return promise with success and failure actions
      return authFetch.get(url).then(  
        news => {
            if (news.status == 200 || news.status == 201) {

              if(page ==1)
              {
                //we need to take the seperate action for total count as we do not have total_count property from the api
                dispatch({ type: 'FirstLoad', payload: news.data });
              }
              else
              {
                dispatch({ type: 'SUC', payload: news.data });
              }


              }
        },
        err => {
            toast.error("Error");
            dispatch({ type: 'FAIL', payload :  err })
        }
      );
    };
  };


