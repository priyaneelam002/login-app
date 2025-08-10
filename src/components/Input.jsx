const Input = ({ label, type, name, register, errors }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      {...register(name)}
      type={type}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
    {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
  </div>
);

export default Input;
