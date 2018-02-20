import LoginContainer from '../containers/login';
import ProfileContainer from '../containers/profile';
import HomeContainer from '../containers/home';

const Routes = {
  Login: {
    screen: LoginContainer
  },
  Profile: {
    screen: ProfileContainer
  },
  Home: {
    screen: HomeContainer
  }
};

export default Routes;