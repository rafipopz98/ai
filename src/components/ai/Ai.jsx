import React, { useState } from "react";
import AiBody from "../aiBody/AiBody";
import AiInput from "../aiInput/AiInput";
import "./Ai.css";
import { useMutation } from "react-query";
import { fetchResponse } from "../../api";

const Ai = () => {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate(); 
  };
  return (
    <div className="ai">
      <div className="aibox">
        <div className="gr1"></div>
        <div className="gr2"></div>
        <div className="header">AppName</div>
        <div className="bodyWrapper">
          <AiBody chat={chat} />
        </div>
        <div className="input">
          <AiInput sendMessage={sendMessage} loading={mutation.isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Ai;
