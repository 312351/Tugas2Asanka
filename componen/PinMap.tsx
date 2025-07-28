import { MapPinIcon } from "@heroicons/react/24/solid";

type PinMapPros ={
  label?:string;
}

export default function PinMap({label }:PinMapPros) {
  return (
    <div className="relative w-64">
      <MapPinIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
     
      <input
        type="text"
        id={label}
        placeholder={label}
        className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-1 pl-10 text-sm placeholder-transparent focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
      />


      <label
        htmlFor={label}
        className="absolute left-10 top-3 text-sm text-gray-400 transition-all duration-200 
        peer-placeholder-shown:top-3.5 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-1 
        peer-focus:text-sm 
        peer-focus:text-teal-700"
      >
        {label}
      </label>
    </div>
  );
}
