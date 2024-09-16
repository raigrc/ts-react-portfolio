import image from "/public/about/image.png";

const Avatar = () => {
  return (
    <div className="grid px-3 h-1/2 animate-jump-in place-items-center animate-delay-500 animate-duration-700 animate-once animate-ease-in-out lg:h-auto lg:w-1/2">
      <div className="overflow-hidden rounded-full size-64">
        <img
          className="object-contain -translate-y-20 bg-purple-400"
          src={image}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Avatar;
