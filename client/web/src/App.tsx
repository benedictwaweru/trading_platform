import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import Login from "./pages/user/auth/Login";
import Signup from "./pages/user/auth/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth">
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}
