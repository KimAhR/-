/* 
    리듀서 함수 : 상태를 업데이트하는 함수.
        => 첫번째 인자는 최신 상태값. 
        => 두번째 인자는 업데이트에 필요한 정보를 담은 액션 객체.
        => 리듀서의 함수의 리턴값이 곧 상태 업데이트. 
        => 컴포넌트에서 상태 업데이트 로직을 분리할 수 있다.
*/

export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.amount };
    case "DECREMENT":
      const { count, amount } = state;
      return { ...state, count: count - amount };
    case "CHANGE_AMOUNT":
      return { ...state, amount: action.amount };
    default:
      return state;
  }
}
