import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { NotFound } from "../pages/NotFound";

const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Public;
