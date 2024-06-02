import React from "react";

type Image = {
  img: string;
};

const SVGImage: React.FC<Image> = ({ img }) => {
  return (
    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:animate-fade opacity-20 animate-duration-700 animate-once animate-ease-in-out lg:relative lg:left-0 lg:top-0 lg:w-1/2 lg:-translate-x-0 lg:-translate-y-0 lg:opacity-100">
      <img src={img} alt={img} />
    </div>
  );
};

export default SVGImage;
