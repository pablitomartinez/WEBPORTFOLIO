export function ButtonDownload({ children, ...props }) {
  return (
    <button
      className="flex items-center justify-center w-full px-10 border-2 py-4 text-base font-medium uppercase  rounded-full text-center text-white transition duration-500 ease-in-out transform md:border-secondary hover:bg-secondary hover:text-primary hover:border-none"
      {...props}
    >
      <svg
        className="w-8 h-8 mr-2 text-secondary hover:text-primary"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        ></path>
      </svg>
      {children}
    </button>
  );
}

export default ButtonDownload;
