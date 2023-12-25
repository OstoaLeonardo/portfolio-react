const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const secret_id = import.meta.env.VITE_SPOTIFY_SECRET_ID;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const tokenEndPoint = 'https://accounts.spotify.com/api/token';
const recentlyPlayedEndPoint = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

const getAccessToken = async () => {
    const response = await fetch(tokenEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(client_id + ':' + secret_id)
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

export const getRecentlyPlayed = async () => {
    try {
        const { access_token } = await getAccessToken();
        const song = await fetchData(access_token, recentlyPlayedEndPoint);
        return formatRecentlySong(song);
    } catch (error) {
        return null;
    }
};

const formatRecentlySong = (song) => {
    if (!song) {
        return null;
    }

    const track = song.items[0].track;

    const image = track.album.images[0]?.url || '';
    const artist = track.artists.map((_artist) => _artist.name).join(', ');
    const title = track.name || '';

    return {
        title,
        artist,
        image,
    };
};
