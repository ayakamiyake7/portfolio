import React from "react";

const Title: React.FC<{ title: string }> = (props) => {
  return (
    <h3 className="text-lg md:text-2xl font-bold tracking-widest">
      {props.title}
    </h3>
  );
};

export default Title;
