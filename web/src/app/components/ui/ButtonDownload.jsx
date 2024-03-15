export function ButtonDownload({ children, ...props }) {
  return (
    <button
      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium uppercase text-center text-white transition duration-500 ease-in-out transform md:border-2 md:border-secondary hover:bg-secondary hover:text-primary hover:border-none  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonDownload;
