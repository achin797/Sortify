import {connect} from 'react-redux';
import {startLoading, stopLoading, addUser, removeUser} from '../Actions';
import Users from '../Components/Users'

const mapStateToProps = (state, ownProps) => ({
    users: state.users,
    loading: state.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
    addUser: () => dispatch(addUser()),
    removeUser: (userId) => dispatch(removeUser(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)