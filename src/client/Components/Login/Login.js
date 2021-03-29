import React, { useState } from "react";
import axios from "axios";
import { StreamChat } from "stream-chat";

const Login = () => {
  const [inputText, setInputText] = useState("");
  const chatClient = StreamChat.getInstance(process.env["REACT_APP_KEY"]);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/token", { user_id: inputText })
      .then((r) => chatClient.connectUser({ id: inputText }, r.data));
  };
  return (
    <div>
      <h1>Login:</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Login!
      </button>
    </div>
  );
};

export default Login;
