export function Label({ children, ...props }) {
  return (
    <label className="block font-mono text-sm font-medium text-neutral-600" {...props}>
      {children}
    </label>
  );
}

export default Label;
