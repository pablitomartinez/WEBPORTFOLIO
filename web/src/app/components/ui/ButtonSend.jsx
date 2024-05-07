export function ButtonSend({ children, ...props }) {
  return (
    <button
      className="flex justify-center w-full md:w-[14rem] px-10 py-4 text-base font-medium uppercase text-center text-white transition duration-500 ease-in-out transform border-solid border-2 hover:bg-secondary hover:text-primary hover:border-none  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonSend;
