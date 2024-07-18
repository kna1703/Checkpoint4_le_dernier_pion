import { Outlet } from "react-router-dom";
import UserProvider from "./components/contexts/UserContext";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;
