import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

/**
 * AppRoutes
 * @description This component is responsible for defining the routes for the app
 */
function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
      <Route
        path="*"
        element={
          <Layout showHero={false}>
            <p>Not Found</p>
          </Layout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
