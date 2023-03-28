import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Chats from "./Components/Chats";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chats" Component={Chats} />
      </Routes>
    </div>
  );
}

export default App;
