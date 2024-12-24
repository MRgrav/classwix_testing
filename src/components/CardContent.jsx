// CardContent.jsx
const CardContent = ({ children, className }) => {
    return (
      <div class={`p-4 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default CardContent;
