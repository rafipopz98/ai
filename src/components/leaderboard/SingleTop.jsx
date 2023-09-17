import "./Single.css";
const SingleTop = () => {
  const tempData = [
    {
      image: "https://picsum.photos/200/200",
      name: "john",
      likes: 10,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure inventore cum voluptate eaque praesentium vel tempora sapiente ipsam commodi cumque, repudiandae nesciunt?",
    },
    {
      image: "https://picsum.photos/240/240",
      name: "doe",
      likes: 20,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure in ",
    },
    {
      image: "https://picsum.photos/300/300",
      name: "unknown",
      likes: 17,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure inventore cum ntiente ipsam commodi cumque, repudiandae nesciunt?",
    },
    {
      image: "https://picsum.photos/240/240",
      name: "doe",
      likes: 20,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure in ",
    },
    {
      image: "https://picsum.photos/300/300",
      name: "unknown",
      likes: 17,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure inventore cum ntiente ipsam commodi cumque, repudiandae nesciunt?",
    },
    {
      image: "https://picsum.photos/240/240",
      name: "doe",
      likes: 20,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure in ",
    },
    {
      image: "https://picsum.photos/300/300",
      name: "unknown",
      likes: 17,
      prompt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure inventore cum ntiente ipsam commodi cumque, repudiandae nesciunt?",
    },
  ];
  return (
    <>
      {tempData.map((item, key) => (
        <div key={key} className="singletop">
          <div className="one">
            <img src={item.image} alt="" />
          </div>
          <div className="two">
            <div className="detailsSingle">
              <h2>{item.name}</h2>
              <div className="totlikesHearts">
                <i className="bx bxs-star bx-md icgg"></i>
                <h3>{item.likes} Likes</h3>
              </div>
            </div>
            <p className="paraSingle">{item.prompt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleTop;
