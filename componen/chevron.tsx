import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown1(){
    return(
           <div className="bg-white w-full h-[25vh] rounded-b-2xl shadow-md max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-2 w-fit px-4 py-2 bl-[4] br-[4] rounded-md cursor-pointer">
        <h1 className="text-sm font-medium">Round-trip</h1>
        <ChevronDownIcon className="w-4 h-4 text-gray-600" />
      </div>
      

    </div>
    );
}