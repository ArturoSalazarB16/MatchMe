export default function login(state = { user: { name: 'nope' }}, action) {
  switch (action.type) {
    case 'loginFailed':
      return {
        ...state,
        error: action.error
      };

    default: break;
  }
  return state;
};