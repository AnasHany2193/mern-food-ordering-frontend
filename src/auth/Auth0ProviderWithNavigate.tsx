import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

/**
 * Authentication Provider
 * @description This is the Auth0 Provider that is used to authenticate users. It is wrapped with a navigate function that is used to redirect the user to the home page.
 */
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!domain || !clientId || !redirectUri)
    throw new Error("Unable to load Auth0 configuration");

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("User logged in:", user);
    console.log("App state:", appState);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;