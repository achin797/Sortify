class SpotifyDataParser {

    static parseAlbum({album_type, artists, id, images, name, release_date}) {
        return {
            album_type,
            artists: SpotifyDataParser.parseArtists(artists),
            id,
            images,
            name,
            release_date
        };
    }

    static parseArtists(artists) {
        return artists.map(({id, name}) => ({id, name}));
    }

    static parseAudioFeatures({danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo}) {
        return {danceability, energy, loudness, speechiness, acousticness, instrumentalness, liveness, valence, tempo};
    }

    static parseSongs(songs) {
        let parsedSongs = {};
        songs.forEach(({added_at, track}) => {
            let {album, artists, duration_ms, id, name, popularity} = track;
            parsedSongs[id] = {
                album: SpotifyDataParser.parseAlbum(album),
                artists: SpotifyDataParser.parseArtists(artists),
                duration_ms,
                id,
                name,
                popularity,
                added_at
            }
        });
        return parsedSongs;
    }

    static parseUserProfile({id, display_name, product, email, images, followers, country, birthdate}) {
        return {id, display_name, product, email, images, followers: followers.total, country, birthdate}
    };

}

export default SpotifyDataParser;