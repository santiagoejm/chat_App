import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Components/Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="App">
      <div className="joinChat-container">
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
        <button onClick={joinRoom}>Join a Room</button>
      </div>

      <Chat socket={socket} userName={userName} room={room} />
    </div>
  );
}

export default App;
