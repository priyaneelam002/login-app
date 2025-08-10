const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full py-2 mt-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:opacity-90 transition"
  >
    {children}
  </button>
);

export default Button;
