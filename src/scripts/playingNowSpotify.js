const client_id = 'b98830dfd88f4b03b153bbe48623e883';
const secret_id = '6e7f3069ac9f485c82fbe77a78b00c19';
const refresh_token = 'AQAReYa6GqbITmLxO_3_L3Lej04jxyXOUE9c7qnb0SeL-RpOKU_9IZV3dE6Jhiag0b7EqnZbjwHGCcAqlypyL6t_gHXVcW3Fgl0tYl3nPPy8bRLdhv_cYpZ9ZK8mJUJBzow'

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

const getRecentlyPlayedItem = async () => {
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
