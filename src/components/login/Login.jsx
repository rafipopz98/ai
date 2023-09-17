import logo from "./image/logo.png";
import img1 from "./image/image1.png";
import img2 from "./image/image2.png";
import img3 from "./image/image3.png";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");
    const toggle_btn = document.querySelectorAll(".toggle");
    const main = document.querySelector("main");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });

    toggle_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
      });
    });

    function moveSlider() {
      let index = this.dataset.value;

      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove("show"));
      currentImage.classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      this.classList.add("active");
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  }, [10]);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, value;
  const inputHandlerIn = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const inputHandlerUp = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const loginHandler=(e)=>{
    e.preventDefault();
    console.log(loginData)
  }

  const signUpHandler=(e)=>{
    e.preventDefault();
    console.log(signUpData)
  }
  

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              className="sign-in-form"
            >
              <div className="logo">
                <img src={logo} alt="easyclassName" />
                <h4>easyclassName</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <Link  to={"/"} className="toggle">
                  Sign up
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="email"
                    minLength={4}
                    className="input-field"
                    autoComplete="false"
                    required
                    name="email"
                    value={loginData.email}
                    onChange={inputHandlerIn}
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    name="password"
                    value={loginData.password}
                    onChange={inputHandlerIn}
                  />
                  <label>Password</label>
                </div>

                <input onClick={loginHandler} type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgot
                  <Link to={"/forgotpassword"}> password</Link> ?
                </p>
              </div>
            </form>

            <form
              className="sign-up-form"
            >
              <div className="logo">
                <img src={logo} alt="easyclassName" />
                <h4>easyclassName</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <Link to={"/"} className="toggle">
                  Sign in
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="name"
                    value={signUpData.name}
                    onChange={inputHandlerUp}
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="email"
                    value={signUpData.email}
                    onChange={inputHandlerUp}
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="password"
                    value={signUpData.password}
                    onChange={inputHandlerUp}
                  />
                  <label>Password</label>
                </div>

                <input onClick={signUpHandler} type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src={img1} className="image img-1 show" alt="" />
              <img src={img2} className="image img-2" alt="" />
              <img src={img3} className="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own stories</h2>
                  <h2>Using your own prompt</h2>
                  <h2>Upvote according to your wish</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
