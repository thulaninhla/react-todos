  
import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { Container } from "react-bootstrap"
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./Components/ProfilePage";
import { UserContext } from "./providers/UserProvider";

function App() {
  
  return (
    <div>
      <Container className="d-flex align-items-cenetr justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '900px' }}>
    <UserProvider>
      <Application />
    </UserProvider>
    </div>
    </Container>
    </div>
  );
}

export default App;