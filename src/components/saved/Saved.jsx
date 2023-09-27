import  { useState } from "react";
import SingleTop from "../leaderboard/SingleTop";
import Modal from "../modal/Modal";

const Saved = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="leaderboard">
      <div className="card" onClick={() => setIsOpen(!isOpen)}>
        <SingleTop />
      </div>
      {isOpen ? (
            <div onClick={() => setIsOpen(!isOpen)}>
              <Modal />
            </div>
          ) : null}
    </div>
  );
};

export default Saved;
