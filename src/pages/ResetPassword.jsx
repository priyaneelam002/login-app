import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password has been reset successfully.");
    navigate("/"); // Redirect back to Login page
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("newPassword", { required: true })}
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded mb-4"
          />
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded mb-4"
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
