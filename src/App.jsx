import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Users />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
