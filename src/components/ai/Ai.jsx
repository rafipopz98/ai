import React, { useEffect, useState } from "react";
import AiBody from "../aiBody/AiBody";
import AiInput from "../aiInput/AiInput";
import "./Ai.css";
import { useMutation } from "react-query";
import { fetchResponse } from "../../api";
import { useNavigate } from "react-router-dom";

const Ai = () => {
  const [chat, setChat] = useState([]);

  const [recentMsg, setRecentMsg] = useState("");

  useEffect(() => {
    const storedChat = JSON.parse(localStorage.getItem("message"));
    if (storedChat) {
      setChat(storedChat);
    }
  }, []);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) => {
      const newMessage = {
        sender: "ai",
        message: data.message.replace(/^\n\n/, ""),
      };
      const updatedChat = [...chat, newMessage];
      // Store the updated chat data in localStorage
      localStorage.setItem("message", JSON.stringify(updatedChat));
      setChat(updatedChat);
      setRecentMsg(chat);
      console.log(newMessage, "j");
    },
  });
  const navigate = useNavigate();

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
    setRecentMsg((prev) => prev);
    localStorage.setItem("recentMsg", JSON.stringify(message));
  };

  console.log(recentMsg, "l");

  return (
    <div className="ai">
      <div className="aibox">
        <div className="gr1"></div>
        <div className="gr2"></div>
        <div className="header">
          <h5>app name</h5>
          <div className="ic">
            <i title="saved" className="bx bxs-bookmarks bx-sm"></i>
            <i title="leaderboard" className="bx bx-line-chart bx-sm"></i>
            <i
              title="logout"
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/");
              }}
              className="bx bx-log-out bx-sm"
            ></i>
          </div>
        </div>
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
