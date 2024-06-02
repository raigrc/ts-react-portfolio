import React from "react";

type Image = {
  img: string;
};

const SVGImage: React.FC<Image> = ({ img }) => {
  return (
    <div className="animate-fade animate-once animate-duration-1000 animate-ease-in-outabsolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center opacity-20 lg:relative lg:left-0 lg:top-0 lg:w-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:opacity-100">
      <img src={img} alt={img} />
    </div>
  );
};

export default SVGImage;
