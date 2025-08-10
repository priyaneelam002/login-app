import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    alert(`Reset link sent to ${data.email}`);
    navigate("/reset-password");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded mb-4"
          />
          <Button type="submit">Send Reset Link</Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
