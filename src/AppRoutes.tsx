import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/layout";
import ProtectedRoute from "./auth/ProtectedRoute";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserProfilePage from "./pages/UserProfilePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

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

      <Route
        path="/search/:city"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />

      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>

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
