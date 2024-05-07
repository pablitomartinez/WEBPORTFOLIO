export function Input(props) {
  return (
    <>
      <input
        // className="block w-full px-2 py-3 text-base text-white border-b border-terciary focus:outline-none focus:border-transparent placeholder-gray-300 ease-in-out transform bg-transparent"
        className="block w-full px-2 py-3 text-base font-mono text-white border-b border-terciary focus:outline-none focus:border-secondary placeholder-gray-300 ease-in-out transform bg-transparent"
        {...props}
      />
    </>
  );
  
}

export default Input;
