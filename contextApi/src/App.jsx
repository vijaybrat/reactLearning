import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/ContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>hello moto context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
