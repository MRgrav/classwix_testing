export default function Button (props) {
    const { children, onClick, className } = props;
    return (
      <button
        class={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-4 focus:scale-95 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  

  