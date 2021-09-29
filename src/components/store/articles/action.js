import { PUBLIC_URL } from "../../utils/constants";
export const GET_ARTICLES_PENDING = "ARTICLES::GET_ARTICLES_PENDING";
export const GET_ARTICLES_SUCSESS = "ARTICLES::GET_ARTICLES_SUCSESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";


const getArticlesPending = () => ({
  type: GET_ARTICLES_PENDING,
});

const getArticlesSucsess = (articles) => ({
  type: GET_ARTICLES_SUCSESS,
  payload: articles,
});

const getArticlesFailure = (error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: error,
  });

export const getArticles = () =>  (dispatch) => {
    dispatch(getArticlesPending());
    fetch(PUBLIC_URL).then((response) => {
        if(!response.ok) {
            throw new Error(`error ${response.status}`);
        }
        return response.json();
    })
    .then((result) => {
    dispatch(getArticlesSucsess(result));
    })
    .catch((e) =>{
        console.log(e);
        dispatch(getArticlesFailure(e.message));
    })
    
}