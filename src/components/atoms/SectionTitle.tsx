import React from "react";

const SectionTitle: React.FC<{ title: string }> = (props) => {
  return (
    <h2 className=" text-2xl md:text-4xl font-bold tracking-widest relative after:w-12 after:h-px after:bg-yellow after:absolute after:left-0 after:-bottom-1">
      {props.title}
    </h2>
  );
};

export default SectionTitle;
