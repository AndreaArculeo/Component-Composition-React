import { useState } from "react";
import Container from "./Container";
import "./App.css";

function App() {
  return (
    <>
      <Container title="Show stuff">
        <div>first element</div>
        <div>second children</div>
        <div>third element</div>
      </Container>
    </>
  );
}

export default App;
