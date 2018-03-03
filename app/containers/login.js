import Login from '../components/login';
import login from '../actions/login' 
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    error: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;
