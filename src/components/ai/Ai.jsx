import AiBody from "../aiBody/AiBody";
import AiInput from "../aiInput/AiInput";
import "./Ai.css";
const Ai = () => {
  return (
    <div className="ai">
      <div className="aibox">
        <div className="gr1"></div>
        <div className="gr2"></div>
        <div className="header">AppName</div>
        <div className="bodyWrapper">
          <AiBody />
        </div>
        <div className="input">
          <AiInput />
        </div>
      </div>
    </div>
  );
};

export default Ai;
