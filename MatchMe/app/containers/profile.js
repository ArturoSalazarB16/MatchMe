import Profile from '../components/profile'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    user: state.profile.user
  }
}

const mapDispatchToProps = dispatch => {
  return {};
}

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ProfileContainer;
