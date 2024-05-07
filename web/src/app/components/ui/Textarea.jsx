export function Textarea({ children, ...props }) {
  return (
    <textarea
      className="block w-full px-2 py-3 text-base font-mono text-white border-b border-terciary focus:outline-none focus:border-secondary placeholder-gray-300 ease-in-out transform bg-transparent row-4"
      rows={4}
      {...props}
    >
      {children}
    </textarea>
  );
}

export default Textarea;
