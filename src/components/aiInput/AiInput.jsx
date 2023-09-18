import "./AiInput.css";
import send from './send.png'
const AiInput = () => {

  return (
    <div className="aiInput">
      <textarea rows={1} className="textArea"/>
      <img src={send} alt="sendButton" width={20} className="sendButton"/>
    </div>
  );
};

export default AiInput;
