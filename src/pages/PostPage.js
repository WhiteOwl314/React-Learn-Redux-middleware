import React from 'react';
import PostContainer from '../containers/PostContainer';

function PostPage({match}) {
    const {id}  = match.params; //url 파라미터 조회

    //URL 파라미터 값은 문자열이기 때문에 parseInt
    return <PostContainer postId={parseInt(id,10)} />;
}

export default PostPage;