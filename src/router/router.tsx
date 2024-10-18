import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import ExcelListing from "../pages/ExcelListing";
import DisplayExcelData from "@/pages/DisplayExcelData";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/NotFound";

const Router = () => {
  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user ? true : false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/map" element={<Map />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home/*" element={<Home />} />
          <Route path="/excelListing" element={<ExcelListing />} />
          <Route path="/displayExcelData/:id" element={<DisplayExcelData />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
