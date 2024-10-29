import { useNavigate } from "react-router-dom";
import { AppState, Auth0Provider } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

/**
 * Authentication provider
 * @description This provider is used to authenticate the user and get the user's profile.
 */
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!domain || !clientId || !redirectUri || !audience)
    throw new Error("Unable to load Auth0 configuration");

  const onRedirectCallback = (appState?: AppState) =>
    navigate(appState?.returnTo || "/auth-callback");

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{ redirect_uri: redirectUri, audience }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
