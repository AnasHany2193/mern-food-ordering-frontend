import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/layout";

/**
 * AppRoutes
 * @description This component is responsible for defining the routes for the app
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>} />
      <Route path="/user-profile" element={<p>User Profile Page</p>} />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
      <Route
        path="*"
        element={
          <Layout>
            <p>Not Found</p>
          </Layout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
