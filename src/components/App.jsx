import React, { useState } from "react";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";

function App() {
  const [user, setUser] = useState(null);
  return <>{user === null ? <Login setUser={setUser} /> : <Profile />}</>;
}

export default App;
