
export function testMiddleware(test) {
  console.log('START_MIDDLEWARE_TEST --> ', test);
  return function (next) {
    return function (action) {
      console.log('ACTION_IN_MIDDLEWARE --> ', action);

      console.log('GET_STATE --> ', test.getState());
      return next(action);
    };
  };
}
