import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Registeration/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import BirthDetails from "./pages/BirthDetails/BirthDetails";
import './App.css';
import { UserProvider } from './context/UserContext.jsx'
import { RequireAuth } from "./context/RequireAuth.jsx";
import { RequireBirthDetails } from "./context/RequireBirthDetails.jsx";


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<Register/>}/>
       
            <Route path="/birth-details" element={<BirthDetails />} />
         
              <Route path="/dashboard/*" element={<Dashboard />} />
          

      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}
export default App;