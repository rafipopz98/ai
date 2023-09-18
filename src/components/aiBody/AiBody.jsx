import "./AiBody.css";
const AiBody = () => {
  return (
    <div className="aiBody">
      {/* clientMess */}
      <div className="Div ai-style ">
        <pre className="Pre">
          <span>gg</span>
        </pre>
      </div>
      {/* aiMsg */}
      <div className="Div ai-style sty">
        <pre className="Pre">
          <div
            style={{
              display: "flex",
              alignItems: "end",
              gap: "5px",
            }}
          >
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit omnis, dolorum adipisci ratione odio vel repudiandae animi enim, rem tempora magnam unde deleniti nihil suscipit aut eaque! Neque, recusandae maiores.</span>
            <button
              style={{
                background: "transparent",
                alignItems:"end",
                border: "none",
              }}
            >
              <i className="bx bx-like bx-sm"></i>
            </button>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default AiBody;
