"use client"
import { useState } from "react";
import { FaDollarSign, FaGlobe } from "react-icons/fa";

export default function Drawer(){
    const[open,setOpen]=useState(false);
    return(
         <div className="relative inline-block text-left justify-center items-center flex">
        <button className=" flex items-center justify-center w-[20vh] h-full " onClick={() => setOpen(!open)}><FaGlobe/> En/Idn <svg className={`w-4 h-4 ml-1 transition-transform ${ open?"rotate-180": "rotate-0" }`} 
            xmlns="http://www.w3.org/2000/svg" 
             fill="none"
             viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg></button>

             {open && (
        <div className="absolute z-50 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
              >
                <FaGlobe className="mr-2" />
                EN English
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
              >
                <FaDollarSign className="mr-2" />
                IDR Rp
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
    );
}