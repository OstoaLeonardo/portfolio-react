const client_id = 'b98830dfd88f4b03b153bbe48623e883';
const secret_id = '6e7f3069ac9f485c82fbe77a78b00c19';
const refresh_token = 'AQBOtkXC9VI9kknN0e2GPv27a-I23LRft16_eRwf8E_uSeb0Q7Pc6TRJma0YpDPvZb9LvMQi64h35-klmckLkF2FUiUFL0inmrt-EYEEpYyNXonjB66XgzuINLtN9zgOxcY'

const tokenEndPoint = 'https://accounts.spotify.com/api/token';
const nowPlayingEndPoint = 'https://api.spotify.com/v1/me/player/currently-playing';
const recentlyPlayedEndPoint = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const getAccessToken = async () => {
    const response = await fetch(tokenEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(client_id + ':' + secret_id).toString('base64')
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
        })
    })

    const data = await response.json();
    return data;
}

const fetchData = async (accessToken, endPoint) => {
    const response = await fetch(endPoint, {
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    });

    if (response.status === 204 || response.status > 400) {
        return null;
    }

    return response.json();
};

const getNowPlayingItem = async () => {
    try {
        const { access_token } = await getAccessToken();
        const song = await fetchData(access_token, nowPlayingEndPoint);
        return formatPlayingSong(song);
    } catch (error) {
        handleError(error);
        return null;
    }
};

const getRecentlyPlayedItem = async () => {
    try {
        const { access_token } = await getAccessToken();
        const song = await fetchData(access_token, recentlyPlayedEndPoint);
        return formatRecentlySong(song);
    } catch (error) {
        handleError(error);
        return null;
    }
};

const formatPlayingSong = (song) => {
    if (!song) {
        return null;
    }

    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const duration = song.item.duration_ms;
    const progress = song.progress_ms;

    return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
        duration,
        progress,
    };
};

const formatRecentlySong = (song) => {
    if (!song) {
        return null;
    }

    const track = song.items[0].track;

    const albumImageUrl = track.album.images[0]?.url || '';
    const artist = track.artists.map((_artist) => _artist.name).join(', ');
    const songUrl = track.external_urls.spotify || '';
    const title = track.name || '';
    const duration = track.duration_ms || 0;

    return {
        albumImageUrl,
        artist,
        songUrl,
        title,
        duration,
    };
};

export default getRecentlyPlayedItem;
