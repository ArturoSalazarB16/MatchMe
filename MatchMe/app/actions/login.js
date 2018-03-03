const login = (username, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(loginFailed("test"));
    }, 10);
  };
};

const loginSucceeded = (username, password) => ({
  type: "loginSucceeded",
  data: {
    username, 
    password
  }
});

const loginFailed = (error) => ({
  type: "loginFailed",
  error
});

const loginPending = () => ({
  type: "loginPending"
});

export default login;