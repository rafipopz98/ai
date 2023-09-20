// import { useRef } from "react";
// import "./AiBody.css";
import autoAnimate from "@formkit/auto-animate";
// import { useEffect } from "react";
// const AiBody = ({ chat }) => {
//   // const parent = useRef(null);
//   // const bottomRef = useRef(null);
//   // useEffect(() => {
//   //   parent.current && autoAnimate(parent.current);
//   // }, [parent]);
//   // useEffect(() => {
//   //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   // }, [chat]);

//   return (
//     <div className="aiBody" ref={parent}>
//       {/* clientMess */}
//      {
//       chat.map((message,key)=>{
//         return(
//           <div key={key} className="Div ai-style ">
//           <pre className="Pre">
//             <span>{message.message}</span>
//           </pre>
//         </div>
//         )
//       })
//      }
//       {/* <div ref={bottomRef} style={{ height: "0.75rem" }}></div> */}

//       {/* aiMsg */}
//       {/* <div className="Div ai-style sty">
//         <pre className="Pre">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "end",
//               gap: "5px",
//             }}
//           >
//             <span>
//               {
//                 message.message
//               }
//             </span>
//             <button
//               style={{
//                 background: "transparent",
//                 alignItems: "end",
//                 border: "none",
//               }}
//             >
//               <i className="bx bx-like bx-sm"></i>
//             </button>
//           </div>
//         </pre>
//       </div> */}
//     </div>
//   );
// };

// export default AiBody;

import React, { useRef, useEffect } from "react";
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
              <div>
                <span>{message.message}</span>
                <button>
                koko
                  <i className="bx bx-like bx-sm"></i>
                </button>
              </div>
            </pre>
          </div>
        );
      })}

      <div ref={bottomRef} className="scroll-to-bottom"></div>
    </div>
  );
};

export default ChatBody;
