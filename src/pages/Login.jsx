import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import loginImage from "../assets/login-image.jpg"; // ✅ Make sure the image is in src/assets

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Simulated login check
    if (data.email === "user@test.com" && data.password === "123456") {
      navigate("/welcome");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl flex shadow-lg rounded-xl overflow-hidden">
        
        {/* Left - Login Form */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <div className="text-3xl font-bold text-gray-700 mb-6">Login</div>

          <button className="w-full border px-4 py-2 mb-4 flex items-center justify-center gap-2 rounded hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="text-center text-sm text-gray-500 mb-4">Or sign in with email</div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              name="email"
              type="email"
              register={register}
              errors={errors}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              errors={errors}
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label>
                <input type="checkbox" className="mr-1" /> Keep me logged in
              </label>
              <Link to="/forgot" className="text-blue-500 hover:underline">Forgot password?</Link>
            </div>
            <Button type="submit">Login</Button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-50 relative">
          <img
            src={loginImage}
            alt="Login Visual"
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;
