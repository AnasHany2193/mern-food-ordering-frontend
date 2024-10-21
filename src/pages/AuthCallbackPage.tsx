import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import Loader from "@/components/Loader";
import { useCreateMyUser } from "@/api/MyUserApi";

/**
 * Authentication callback page.
 * @description Redirects the user to the home page after successful authentication.
 */
function AuthCallbackPage() {
  const navigate = useNavigate();

  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }

    navigate("/");
  }, [createUser, user, navigate]);

  return <Loader />;
}

export default AuthCallbackPage;
