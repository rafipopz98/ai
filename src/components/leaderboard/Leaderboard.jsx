import "./Leaderboard.css";
import img3 from "../login/image/image3.png";
import { useState } from "react";
import SingleTop from "./SingleTop";
const Leaderboard = () => {
  const [like, setLike] = useState(10);
  const name = "rafi";
  return (
    <div className="leaderboard">
      <div className="card">
        <div className="topper">
          <div className="totlikesHeart">
            <i className="bx bxs-star bx-md"></i>
            <h3>{like} Likes</h3>
          </div>
          <div className="imgName">
            <img src="https://picsum.photos/250/250" alt="" />
            <h2>{name}</h2>
          </div>
          <div className="promtAns">
            <h5>this was the prompt</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              similique non ut illo dolores, sapiente sed, quisquam
              reprehenderit eveniet laborum delectus excepturi hic. Corporis hic
              explicabo quia et iure exercitationem facere dignissimos adipisci
              repellat, accusantium quos blanditiis dolorum natus perspiciatis
              nostrum cupiditate quae
            </p>
          </div>
          <div className="likeBtn">
            <button onClick={() => setLike(like + 1)}>
              upvote for {name}&apos;s prompt
            </button>
          </div>
        </div>
        <div className="restAll">
          <div className="firstRow">
            <i className="bx bx-sort bx-md"></i>
            <div className="iconsi">
              <i className="bx bx-chevron-down icons"></i>
              <i className="bx bx-chevron-up icons"></i>
            </div>
          </div>
          <div className="topSignle">
          <SingleTop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
