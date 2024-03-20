export function Textarea({ children, ...props }) {
  return (
    <textarea
      className="block w-full font-mono px-2 py-3 bg-transparent text-base text-white placeholder-gray-300 transform border-b border-terciary focus:outline-none focus:border-secondary border-transparent row-4"
      rows={4}
      {...props}
    >
      {children}
    </textarea>
  );
}

export default Textarea;
