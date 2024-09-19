import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Posts from "./pages/Posts";
import Questions from "./pages/Questions";

const App = () => (
  <Container>
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="post" element={<Posts />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
    </Router>
    <ToastContainer />
  </Container>
);

export default App;
