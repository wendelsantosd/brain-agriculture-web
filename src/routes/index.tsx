import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../assets/shared/layout/Layout";
import { Dashboard } from "../pages/dashboard";

export const ReactRoutes = () => <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
    </Route>
  </Routes>
</Router>