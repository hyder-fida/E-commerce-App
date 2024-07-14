import { useState } from "react";
import loginIcons from "../../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageToBase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const response = await fetch(SummaryApi.signUp.url, {
        method: SummaryApi.signUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      console.log("data", responseData);
    } else { 
      console.log("Please check password and confirm password");
    }
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageToBase64(file);

    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });

    // console.log("image pic", imagePic);

    // console.log(file)
  };

  //console.log("data login ", data);

  return (
    <section id="signup">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-5 py-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img
                src={data.profilePic ? data.profilePic : loginIcons}
                alt="login icons"
              />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  upload photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name: </label>
              <div className="bg-slate-200 p-2 rounded">
                <input
                  type="text"
                  placeholder="enter your name"
                  required
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-200 p-2 rounded">
                <input
                  type="email"
                  placeholder="enter email"
                  required
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password: </label>
              <div className="bg-slate-100 p-2 rounded flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  required
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div>
              <label>Confirm Password: </label>
              <div className="bg-slate-100 p-2 rounded flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  required
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                  autocomplete="new-password"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full transition-all mx-auto block mt-6">
              Sign up
            </button>
          </form>
          <p className="my-5">
            already have an account?
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
