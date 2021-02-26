export const oidcSettings = {
	authority: 'https://accounts.google.com',
	clientId: process.env.GOOGLE_CLIENT_ID,
	redirectUri: 'http://localhost:3000/oidc-callback',
	responseType: 'id_token token',
	scope: 'openid email',
	automaticSilentRenew: true,
	silentRedirectUri: 'http://localhost:3000/silent-renew-oidc.html'
}
