
import autoAnimate from "@formkit/auto-animate";


import  { useRef, useEffect } from "react";
import "./ChatBody.css"; // Import the corresponding CSS file

const ChatBody = ({ chat }) => {
  const aiStyle = "ai-message"; // Define a CSS class name for AI messages

  const parent = useRef(null);
  const bottomRef = useRef(null);
  useEffect(() => { 
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="chat-container" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`message ${message.sender === "ai" ? aiStyle : ""}`}
          >
            <pre className="message-content">
              <span>{message.message}</span>
            </pre>
            {message.sender === "ai" && (
              <div className="button-container">
                <button className="action-button"><i className="bx bx-like bx-sm"></i></button>
                <button className="action-button"><i className="bx bx-share bx-sm"></i></button>
                <button className="action-button"><i className="bx bx-bookmark bx-sm"></i></button>
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
