import * as postsAPI from '../api/posts';
import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionById
} from "../lib/asyncUtils";

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; //요청 성공
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR ='GET_POST_ERROR';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

const initialState = {
    posts: reducerUtils.initial(),
    post: {}
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActionById(GET_POST, 'post')(state, action);
        default:
            return state;
    }

}

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용할 수 있음
export const goToHome = () => (dispatch, getState, {history}) =>{
    history.push('/');
};