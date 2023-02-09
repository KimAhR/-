import { Route, Routes } from "react-router-dom";
import Login from "./component/page/Login";
import SignUp from "./component/page/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};
