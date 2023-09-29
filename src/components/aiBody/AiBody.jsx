import autoAnimate from "@formkit/auto-animate";

import { useRef, useEffect, useContext } from "react";
import "./ChatBody.css";
import { GlobalContext } from "../../context";
import axios from "axios";
const ChatBody = ({ chat, saveMsg }) => {
  const aiStyle = "ai-message";

  const parent = useRef(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const msg = localStorage.getItem("message");

  const saveHandler = () => {
    saveMsg(chat);
  };

  const rec = JSON.parse(localStorage.getItem("recentMsg"));
  console.log(rec.message);
  

  return (
    <div className="chat-container" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`message ${message.sender === "ai" ? aiStyle : ""}`}
          >
            <pre className="message-content">
              {/* {message.sender === "ai" && `Q : ${rec.message}\n`} */}
              <span>{message.message}</span>
            </pre>
            {message.sender === "ai" && (
              <div className="button-container">
                <button className="action-button">
                  <i className="bx bx-like bx-xs"></i>
                </button>
                <button className="action-button">
                  <i className="bx bx-share bx-xs"></i>
                </button>
                <button className="action-button">
                  <i onClick={saveHandler} className="bx bx-bookmark bx-xs"></i>
                </button>
              </div>
            )}
          </div>
        );
      })}

      <div ref={bottomRef} className="scroll-to-bottom"></div>
    </div>
  );
};

export default ChatBody;
