import { Eye, EyeOff } from "lucide-react";
import group1 from "../../assets/img/group.png";
import group2 from "../../assets/img/group2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setRememberMe,
  toggleShowPassword,
} from "../../redux/authSlice/authSlice.jsx";
import { useLoginUserMutation } from "../../redux/authSlice/authApi.jsx";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { showPassword, formData, rememberMe } = useSelector(
    (state) => state.auth
  );
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(formData).unwrap();
      console.log("User logged in successfully:", user);
      navigate("/");
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B24] flex items-center gap-32 ">
      {/* Left side */}
      <div className="hidden lg:flex flex-col justify-evenly h-[600px] w-[700px] ml-14">
        <div className="text-[#F15C22] text-3xl font-bold absolute top-10 left-14">
          <img src={group1} alt="first-photo" />
        </div>
        <div className=" h-[300px] w-[360px] mx-auto">
          <img src={group2} alt="" className="h-full w-full" />
        </div>
        <div className="text-[#F3642A] text-4xl font-medium font-gilroy italic pl-20">
          <h1>Welcome back!</h1>
          <h1>Log in to access your dashboard</h1>
          <h1>and keep things moving!</h1>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="bg-white p-8 shadow-2xl max-w-md rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <p className="text-gray-600 mb-1 text-sm">
          Log in to access your dashboard and keep things moving!
        </p>
        <form onSubmit={handleLogin}>
          <div className="space-y-6 mt-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  dispatch(setFormData({ ...formData, email: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    dispatch(
                      setFormData({ ...formData, password: e.target.value })
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => dispatch(toggleShowPassword())}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => dispatch(setRememberMe(e.target.checked))}
                className="h-4 w-4 text-[#FF5722] focus:ring-[#FF5722] border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF5722] text-white py-2 px-4 rounded-md hover:bg-[#F4511E] transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-[#FF5722] hover:underline">Sign up</a>
        </div> */}

        {/* <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or login with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <img src={google} alt="" className="h-5 w-5" />
            </button>
            <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <img src={apple} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
