import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../shared/layout/Layout";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Farmer } from "../pages/Farmer/Farmer";

export const ReactRoutes = () => <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/farmer" element={<Farmer />} />
    </Route>
  </Routes>
</Router>