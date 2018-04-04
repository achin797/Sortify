import $ from "jquery";

// For now we must manually enter token
const ACCESS_TOKEN = "BQD_jVA4vlaZmwQOP7vj7D4VBrSUhcuNBf7lgY2R5R5UC-bJGqW5-vH7WJmMLtT4Za_E2CuEcbR--lxEgzbbHzfcikL_c_XzaS4mT8F5e976QMU2VS2UBVYu9425eEbXfpvmbOas9pJYQXEq80g5O7aYpG-uB6pF1rFT7_v9ths";

class SpotifyService {

    play(songIds) {
        const requestData = songIds? {
            uris: songIds.map(id => ("spotify:track:" + id) )
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

    pause() {
        $.ajax({
            method: "PUT",
            url: 'https://api.spotify.com/v1/me/player/pause',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }

    next() {
        $.ajax({
            method: "POST",
            url: 'https://api.spotify.com/v1/me/player/next',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }

    previous() {
        $.ajax({
            method: "POST",
            url: 'https://api.spotify.com/v1/me/player/previous',
            headers: {
                'Authorization': 'Bearer ' + ACCESS_TOKEN
            }
        })
    }
}

export default SpotifyService;