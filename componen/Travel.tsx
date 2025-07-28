type TravelProps = {
  iconSrc: string;
  h1: string;
  p: string;
};

export default function Travel({ iconSrc, h1, p }: TravelProps) {
  return (
    <div className="w-[25vh] h-[25vh] lg:w-[35vh] lg:min-h-[35vh] bg-cover flex flex-col text-black shadow-lg overflow-hidden rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src={iconSrc}
        alt=""
        className="w-full h-[65%] object-cover transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 cursor-pointer"
      />
      <div className="p-5 gap-y-10 overflow-hidden">
        <p className=" text-[10px] line-clamp-2 font-semibold lg:text-sm">{h1}</p>
        <p className=" text-[10px] line-clamp-2 lg:text-sm">{p}</p>
      </div>
    </div>
  );
}
