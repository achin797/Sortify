import {connect} from 'react-redux';
import Users from '../Components/LoadingScreen'

const mapStateToProps = (state, ownProps) => ({
    loadingMessage: state.loading.loadingMessage
});

export default connect(
    mapStateToProps
)(Users)