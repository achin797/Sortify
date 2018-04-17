import {connect} from 'react-redux';
import App from '../App'

const mapStateToProps = (state, ownProps) => ({
    loading: state.loading
})


export default connect(
    mapStateToProps
)(App)