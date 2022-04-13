const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = [
    'user-read-private',
    'playlist-read-private',
    'playlist-modify-public',
    'streaming',
    'app-remote-control',
    'user-modify-playback-state'
];

export const getAuthorizeHref = (): string => {
    const clientId = '66e349fe32574e6f893f7c942524df94'
    const redirectUri = 'http://localhost:3000/'
    return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;
}