import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import the user data directly, not as a component
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass the correct props to the Home component */}
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
