import Login from "./Components/Login/Login";
import React, { useState } from 'react';
import { StreamChat } from "stream-chat";

function App() {
  // const apiKey = process.env["REACT_APP_KEY"]
  // const chatClient = StreamChat.getInstance(apiKey);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
