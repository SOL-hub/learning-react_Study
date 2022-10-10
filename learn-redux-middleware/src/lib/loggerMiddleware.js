const loggerMiddleware = store => next => action => {
    //미들웨어의 기본 구조다

    //function 키워드로 풀어서 쓰면
    //const loggerMiddleware = function loggerMiddleware(store){
    //    return function(next){
    //        return function(action){
                //미들웨어 기본구조
    //       };
    //    };
    //};

};

export default loggerMiddleware;