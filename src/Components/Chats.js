import axios from "axios";
import React, { useEffect, useState } from "react";

const Chats = () => {
  const [msgs, setMsgs] = useState([]);
  const fetchChats = async () => {
    const data = await axios.get("http://localhost:5000/api/chat");
    setMsgs(data.data);
    // console.log(data.data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {msgs.map((msg) => (
        <div key={msg._id}>{msg.chatName}</div>
      ))}
    </div>
  );
};

export default Chats;
