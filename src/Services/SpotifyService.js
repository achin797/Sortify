import $ from "jquery";

// For now we must manually enter token
const ACCESS_TOKEN = "BQANTAQ_studnZ4oiXhMqdvMsMZzZI2mxGAPTVKnkoRBj5StXnSvt21YHCbfz111I0aU-87KxvEHeHKYLa9e1RMCM-otruwj2d1knkuzjfsY9rBzxJ46KYnPDLOc-swRhWI4eTI0RccBJfUQ2GNxecxX4jv-A0P2Jz0VSdV9hnAa-uMmTjvcrWGi4kp_3OTQgCzBfQsT3A9Ao-rsJYCBnt316-5VVomTynetW2RCKf0c2O7wVoYT8N9YrBj257F3okHmEHQ5Q54tBXfO9yg";

class SpotifyService {

    static play() {
        SpotifyService.playSongs([]);
    }

    static playSongs(songIds) {
        const requestData = songIds ? {
                uris: songIds.map(id => ("spotify:track:" + id))
            } : {};

        $.ajax({
            method: "PUT",
            url: 'https://api.spotify.com/v1/me/player/play',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            },
            data: JSON.stringify(requestData)
        })

    }

    static pause() {
        $.ajax({
            method: "PUT",
            url: 'https://api.spotify.com/v1/me/player/pause',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }

    static next() {
        $.ajax({
            method: "POST",
            url: 'https://api.spotify.com/v1/me/player/next',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }

    static previous() {
        $.ajax({
            method: "POST",
            url: 'https://api.spotify.com/v1/me/player/previous',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }

    static getDevices() {
        $.ajax({
            method: "GET",
            url: 'https://api.spotify.com/v1/me/player/devices',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }

    static getSongsFeatures(songIds) {
        const MAX_IDS_PER_REQUEST = 50;

        return new Promise((resolve, reject) => {
            const maxIndex = songIds.length;
            let songsFeatures = [];

            const getNextSongs = (startIndex, endIndex) => {
                endIndex = (endIndex > maxIndex) ? maxIndex : endIndex;
                const currentSongsIds = songIds.slice(startIndex, endIndex + 1);

                const request = $.ajax({
                    method: "GET",
                    url: ('https://api.spotify.com/v1/audio-features?ids=' + currentSongsIds.join()),
                    headers: {
                        'Authorization': 'Bearer ' + ACCESS_TOKEN
                    }
                });

                request.done(response => {
                    songsFeatures = songsFeatures.concat(response.audio_features);

                    let nextStartIndex = endIndex + 1;
                    let nextEndIndex = nextStartIndex + MAX_IDS_PER_REQUEST;

                    if (nextStartIndex > maxIndex) {
                        return resolve(songsFeatures);
                    }

                    getNextSongs(nextStartIndex, nextEndIndex);
                });

                request.fail(error => {
                    return reject(error);
                });
            };

            getNextSongs(0, MAX_IDS_PER_REQUEST);

        });
    }

    static getUserSongs() {
        return new Promise((resolve, reject) => {
            let songs = [];

            const getNextSongs = (url) => {

                if (!url) {
                    SpotifyService.augmentSongs(SpotifyService.parseSongs(songs)).then((completeSongs) => {
                        resolve(completeSongs);
                        console.log( "There are "+ Object.keys(completeSongs).length + " songs for this user. Here they are");
                        console.log(completeSongs);
                    });
                    return;
                }

                let request = $.ajax({
                    method: "GET",
                    url: url,
                    headers: {
                        'Authorization': 'Bearer ' + ACCESS_TOKEN
                    }
                });

                request.done(response => {
                    songs = songs.concat(response.items);
                    getNextSongs(response.next);
                });

                request.fail(error => {
                    return reject(error);
                });
            };

            getNextSongs('https://api.spotify.com/v1/me/tracks?offset=0&limit=50');

        });
    }


    static parseSongs(originalSongs) {
        let songs = {};

        originalSongs.forEach((originalSong) => {
            let song = {
                id: originalSong.track.id,
                name: originalSong.track.name,
                artists: originalSong.track.artists,
                album: originalSong.track.album,
                popularity: originalSong.track.popularity,
                duration_ms: originalSong.track.duration_ms,
                added_at: originalSong.added_at

            }

            songs[originalSong.track.id] = song;

        });

        return songs;
    }

    static augmentSongs(songs) {

        return new Promise((resolve, reject) => {
            const songFeaturesPromise = SpotifyService.getSongsFeatures(Object.keys(songs));
            songFeaturesPromise.then((songFeaturesList) => {

                songFeaturesList.forEach((songFeatures) => {
                    songs[songFeatures.id].features = {
                        danceability: songFeatures.danceability,
                        energy: songFeatures.energy,
                        key: songFeatures.key,
                        loudness: songFeatures.loudness,
                        mode: songFeatures.mode,
                        speechiness: songFeatures.speechiness,
                        acousticness: songFeatures.acousticness,
                        instrumentalness: songFeatures.instrumentalness,
                        liveness: songFeatures.liveness,
                        valence: songFeatures.valence,
                        tempo: songFeatures.tempo,
                        time_signature: songFeatures.time_signature
                    };
                });

                resolve(songs)

            })

        });

    }
}

export default SpotifyService;