const myLogger = store => next => action => {
    console.log(action);
    const result = next(action); //다음 미들웨어에게 액션 전달

    //업데이트 이후의 상태를 조회합니다.
    console.log('\t', store.getState());

    return result; //반환 값: dispatch(action)결과물 기본: undefined
};

export default myLogger;