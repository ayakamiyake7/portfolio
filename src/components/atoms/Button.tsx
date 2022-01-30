import React from "react";

const Button: React.FC<{ name: string }> = (props) => {
  return (
    <button className="text-navy font-bold text-lg rounded-lg border-4 border-navy py-2 px-8 hover:bg-navy hover:text-white transition">
      {props.name}
    </button>
  );
};

export default Button;
