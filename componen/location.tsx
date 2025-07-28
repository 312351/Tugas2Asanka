import PinMap from "./PinMap";
import { HiSwitchHorizontal } from "react-icons/hi";

export default function InputLocation(){
    return(
      <div className="relative w-full  ">

  <div className="flex gap-2 items-center">
    <PinMap label="From" />
         <button className="absolute left-1/4 top-1 -translate-x-13/10 z-10 bg-white border rounded-full p-1 shadow items-center">
    <HiSwitchHorizontal className="w-4 h-4 text-gray-600" />
  </button>
    <PinMap label="To" />
  </div>
</div>

    );
}