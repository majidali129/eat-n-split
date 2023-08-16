const Button = ({ type = "button", onclick, children }) => {
  return (
    <button
      className="bg-[#7c6754] text-[#ffffffd5] py-1 px-4 rounded-full "
      type={type}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
