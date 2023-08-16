/* eslint-disable react/prop-types */
const Input = ({ type = "text", value, readOnly, onchange }) => {
  return (
    <input
      readOnly={readOnly}
      value={value}
      type={type}
      onChange={onchange}
      className="outline-none border-none rounded py-1 px-3 tracking-wide w-full md:w-[50%] mt-2 "
    />
  );
};

export default Input;
