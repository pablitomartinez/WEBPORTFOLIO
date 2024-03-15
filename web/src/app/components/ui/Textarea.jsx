export function Textarea({ children, ...props }) {
  return (
    <textarea className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent row-4 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" rows={4} {...props}>
      {children}
    </textarea>
  );
}

export default Textarea;
