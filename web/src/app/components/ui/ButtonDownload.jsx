export function ButtonDownload({ children, ...props }) {
  return (
    <button
      className="flex items-center justify-center w-full px-10 border-2 py-4 font-medium uppercase bg-gradient-to-r from-terciary via-secondary to-secondary transition duration-500 ease-in-out transform hover:bg-gradient-to-l hover:from-terciary hover:via-secondary hover:to-secondary rounded-full text-center text-primary bg-secondary  md:border-secondary"
      {...props}
    >
      <svg
        className="w-8 h-8 mr-2 text-primary"
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
