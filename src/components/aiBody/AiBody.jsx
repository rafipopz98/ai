import { useRef } from "react";
import "./AiBody.css";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";
const AiBody = ({ chat }) => {
  const parent = useRef(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="aiBody" ref={parent}>
      {/* clientMess */}
      {chat.map((message, i) => {
        return (
          <div key={i} className="Div ai-style ">
            <pre className="Pre">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
      <div ref={bottomRef} style={{ height: "0.75rem" }}></div>

      {/* aiMsg */}
      {/* <div className="Div ai-style sty">
        <pre className="Pre">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: "5px",
            }}
          >
            <span>
              {
                message.
              }
            </span>
            <button
              style={{
                background: "transparent",
                alignItems: "end",
                border: "none",
              }}
            >
              <i className="bx bx-like bx-sm"></i>
            </button>
          </div>
        </pre>
      </div> */}
    </div>
  );
};

export default AiBody;
