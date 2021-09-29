import { REQUEST_STATUS } from "../../utils/constants";
import { GET_ARTICLES_FAILURE, GET_ARTICLES_SUCSESS, GET_ARTICLES_PENDING } from "./action";

const initialState = {
  newsList: [],
  request: {
      error: null,
      status: REQUEST_STATUS.IDLE
  }
};

export const articlesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES_PENDING: {
      return {
        ...state,
        request: {
         error: null,
         status: REQUEST_STATUS.PENDING   
        }
          };
        }   
    case GET_ARTICLES_SUCSESS: {
     return {
        ...state,
        request: {
            ...state.request,
            status: REQUEST_STATUS.SUCSESS   
           },
        newsList: payload  
      }
    }
    
    case GET_ARTICLES_FAILURE: {
        return {
           ...state,
           request: {
               error: payload,
               status: REQUEST_STATUS.FAILURE   
              },
           newsList: payload  
         }
       }
    default:
      return state;
  }
};
