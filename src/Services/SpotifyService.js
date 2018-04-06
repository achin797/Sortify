import $ from "jquery";
import SpotifyDataParser from "./SpotifyDataParser"
import ErrorHandler from "./ErrorHandler"

class SpotifyService {

    static setAuthToken(token) {
        $.ajaxSetup({
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }

    static play() {
        return SpotifyService.playSongs([]);
    }

    static playSongs(songIds) {
        return new Promise((resolve, reject) => {
            const requestData = songIds ? {
                    uris: songIds.map(id => ("spotify:track:" + id))
                } : {};

            let request = $.ajax({
                method: "PUT",
                url: 'https://api.spotify.com/v1/me/player/play',
                data: JSON.stringify(requestData)
            });

            request.done(response => {
                resolve(response)
            });

            request.fail(error => {
                ErrorHandler.handleError(error);
                reject(error);
            });
        });
    }

    static pause() {
        return new Promise((resolve, reject) => {
            let request = $.ajax({
                method: "PUT",
                url: 'https://api.spotify.com/v1/me/player/pause',
            });

            request.done(response => {
                resolve(response)
            });

            request.fail(error => {
                ErrorHandler.handleError(error);
                reject(error);
            });
        });
    }

    static next() {
        return new Promise((resolve, reject) => {
            let request = $.ajax({
                method: "POST",
                url: 'https://api.spotify.com/v1/me/player/next',
            });

            request.done(response => {
                resolve(response)
            });

            request.fail(error => {
                ErrorHandler.handleError(error);
                reject(error);
            });
        });
    }

    static previous() {
        return new Promise((resolve, reject) => {
            let request = $.ajax({
                method: "POST",
                url: 'https://api.spotify.com/v1/me/player/previous',
            });

            request.done(response => {
                resolve(response)
            });

            request.fail(error => {
                ErrorHandler.handleError(error);
                reject(error);
            });
        });
    }

    static getDevices() {
        return new Promise((resolve, reject) => {
            let request = $.ajax({
                method: "GET",
                url: 'https://api.spotify.com/v1/me/player/devices',
            })

            request.done(response => {
                resolve(response)
            });

            request.fail(error => {
                ErrorHandler.handleError(error);
                reject(error);
            });
        });
    }

    static _getSongsFeatures(songIds) {
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
                    ErrorHandler.handleError(error);
                    reject(error);
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
                    SpotifyService._addAudioFeatures(SpotifyDataParser.parseSongs(songs)).then((completeSongs) => {
                        resolve(completeSongs);

                        //TODO: remove v
                        alert("Check console to se the songs")
                        console.log("There are " + Object.keys(completeSongs).length + " songs");
                        console.log(completeSongs);
                    });
                    return;
                }

                let request = $.ajax({
                    method: "GET",
                    url: url
                });

                request.done(response => {
                    songs = songs.concat(response.items);
                    getNextSongs(response.next);
                });

                request.fail(error => {
                    ErrorHandler.handleError(error);
                    reject(error);
                });
            };

            getNextSongs('https://api.spotify.com/v1/me/tracks?offset=0&limit=50');

        });
    }

    static _addAudioFeatures(songs) {
        return new Promise((resolve, reject) => {
            SpotifyService._getSongsFeatures(Object.keys(songs)).then((audioFeaturesList) => {
                audioFeaturesList.forEach((audioFeatures) => {
                    songs[audioFeatures.id].audio_features = SpotifyDataParser.parseAudioFeatures(audioFeatures);
                });

                resolve(songs)
            });
        });
    }
}

export default SpotifyService;