const Preview = ({ children, theme }) => {
  return (
    <div
      className={`${theme ? "bg-white" : "bg-transparent  dark"} w-full p-5 `}
    >
      {children}
    </div>
  );
};

export default Preview;
