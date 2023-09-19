import React, { useState } from "react";
import "./AiInput.css";
import loader from "../../../public/loader.gif";
import send from "./send.png";
const AiInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");
  const submitHandler = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="aiInput">
      {loading ? (
        <img src={loader} alt="" width={20} style={{ margin: "auto" }} />
      ) : (
        <div>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && submitHandler();
            }}
            rows={1}
            className="textArea"
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <img
            onClick={submitHandler}
            src={send}
            alt="sendButton"
            width={20}
            className="sendButton"
          />
        </>
      )}
    </div>
  );
};

export default AiInput;
