import { Navigate, Route, Routes } from "react-router-dom";

/**
 * AppRoutes
 * @description This component is responsible for defining the routes for the app
 */
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<p>Home Page</p>} />
      <Route path="/user-profile" element={<p>User Profile Page</p>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
