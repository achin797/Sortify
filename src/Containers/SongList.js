import {connect} from 'react-redux';
import SongsList from '../Components/SongList'

const mapStateToProps = (state, ownProps) => ({
    songs: Object.keys(state.songs).map(key => {
        let {id, name, artists} = state.songs[key];
        return {
            id,
            name,
            artists: artists.map(artist => artist.name).join(', '),
            error: Math.random()
        };
    }).sort((s1, s2) => (s2.error - s1.error)).slice(0, 101)
});

export default connect(
    mapStateToProps
)(SongsList)