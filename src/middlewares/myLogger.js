const myLogger = store => next => action => {
    console.log(action);
    const result = next(action); //다음 미들웨어에게 액션 전달
    return result; //반환 값: dispatch(action)결과물 기본: undefined
};

export default myLogger;