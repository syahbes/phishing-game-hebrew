import React from "react";
import { Route, Routes } from "react-router-dom";
import { background, Container, Image } from "@chakra-ui/react";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Question from "./pages/Question";
import ShowRight from "./pages/ShowRight";

const App = () => {
  return (
    <Container
      maxW="xxl"
      minH="100vh"
      bg="yellow.500"
      centerContent
      transition={"0.5s ease-in-out"}
    >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<Score />} />
        <Route path="/showRight/:id" element={<ShowRight />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default App;
