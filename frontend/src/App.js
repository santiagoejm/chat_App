import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {};

  return (
    <div className="App">
      <h3>Join a Chat</h3>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Room n°"
        onChange={(e) => setRoom(e.target.value)}
      ></input>
      <button>Join a Room</button>
    </div>
  );
}

export default App;
