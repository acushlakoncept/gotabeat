


const SIZE = {
  sm: "p-2 text-base xs:px-4",
  md: "p-3 text-base xs:px-8",
  lg: "p-3 text-base xs:px-10",
}

export default function Button({
    children,
    className,
    size="md",
    hoverable=true,
    variant = "orange", 
    ...rest
}) {

  const sizeClass = SIZE[size];
  const variants = {
      white: `text-black bg-white`,
      purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
      green: `text-white bg-green-600 ${hoverable && "hover:bg-green-700"}`,
      red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
      orange: `text-white bg-orange-600 ${hoverable && "hover:bg-orange-700"}`,
      lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable && "hover:bg-indigo-200"}`,
  }

  return (
  <button 
    disabled={false} 
    {...rest}
    className={`${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border font-medium ${className} ${variants[variant]}`}>
      {children}
  </button>
  )
}